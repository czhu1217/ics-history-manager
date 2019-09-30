import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";
import * as use from "@tensorflow-models/universal-sentence-encoder";
const learnTodos = require("./data/learn_todos.json");
const exerciseTodos = require("./data/exercise_todos.json");

const trainTasks = learnTodos.concat(exerciseTodos);

const MODEL_NAME = "suggestion-model";
const N_CLASSES = 2;

const encodeData = async (encoder, tasks) => {
  const sentences = tasks.map(t => t.text.toLowerCase());
  const embeddings = await encoder.embed(sentences);
  return embeddings;
};

const trainModel = async encoder => {
  try {
    const loadedModel = await tf.loadLayersModel(
      `localstorage://${MODEL_NAME}`
    );
    console.log("Using existing model");
    return loadedModel;
  } catch (e) {
    console.log("Training new model");
  }

  const yTrain = tf.tensor2d(
    trainTasks.map(t => [t.icon === "BOOK" ? 1 : 0, t.icon === "RUN" ? 1 : 0])
  );

  const xTrain = await encodeData(encoder, trainTasks);

  const model = tf.sequential();

  model.add(
    tf.layers.dense({
      inputShape: [xTrain.shape[1]],
      activation: "softmax",
      units: N_CLASSES
    })
  );

  model.compile({
    loss: "categoricalCrossentropy",
    optimizer: tf.train.adam(0.001),
    metrics: ["accuracy"]
  });

  const lossContainer = document.getElementById("loss-cont");

  await model.fit(xTrain, yTrain, {
    batchSize: 32,
    validationSplit: 0.1,
    shuffle: true,
    epochs: 150,
    callbacks: tfvis.show.fitCallbacks(
      lossContainer,
      ["loss", "val_loss", "acc", "val_acc"],
      {
        callbacks: ["onEpochEnd"]
      }
    )
  });

  await model.save(`localstorage://${MODEL_NAME}`);

  return model;
};

const predict = async (model, encoder, taskName) => {
  if (!taskName.trim().includes(" ")) {
    return;
  }
  console.log(taskName);
  const xPredict = await encodeData(encoder, [{ text: taskName }]);

  const prediction = model.predict(xPredict);

  console.log(prediction.dataSync());
  return prediction;
};

export { predict, trainModel };
