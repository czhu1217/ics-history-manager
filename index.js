
var natural = require('natural')
const TrainingSet = require('./trainingdata.json')
    classifier = new natural.BayesClassifier();


    classifier.addDocument('Asymptotic Analysis', 'programming');
    classifier.addDocument('Worst, Average and Best Cases', 'programming');
    classifier.addDocument('Little o and little omega notations', 'programming');
    classifier.addDocument('Lower and Upper Bound Theory', 'programming');
    classifier.addDocument('NP-Completeness Introduction', 'programming');
    classifier.addDocument('Linear Search, Binary Search, Jump Search, Interpolation Search, Exponential Search, Ternary Search', 'programming');
    classifier.addDocument('Selection Sort, Bubble Sort, Insertion Sort, Merge Sort, Heap Sort, QuickSort, Radix Sort, Counting Sort, Bucket Sort, ShellSort, Comb Sort, Pigeonhole Sort, Cycle Sort', 'programming');
    classifier.addDocument('Interpolation search vs Binary search', 'programming');
    classifier.addDocument('Lower bound for comparison based sorting algorithms', 'programming');
    classifier.addDocument('Which sorting algorithm makes minimum number of memory writes?', 'programming');
    classifier.addDocument('Find the Minimum length Unsorted Subarray, sorting which makes the complete array sorted', 'programming');
    classifier.addDocument('QuickSort on Singly Linked List', 'programming');
    classifier.addDocument('K’th Smallest/Largest Element in Unsorted Array in Expected Linear Time', 'programming');
    classifier.addDocument('Kruskal’s Minimum Spanning Tree Algorithm', 'programming');
    classifier.addDocument('Dijkstra’s Shortest Path Algorithm', 'programming');
    classifier.addDocument('Dijkstra’s Algorithm for Adjacency List Representation', 'programming');
    classifier.addDocument('Job Sequencing Problem', 'programming');
    classifier.addDocument('Quiz on Greedy Algorithms', 'programming');
    classifier.addDocument('Greedy Algorithm to find Minimum number of Coins', 'programming');
    classifier.addDocument('Overlapping Subproblems Property', 'programming');
    classifier.addDocument('Optimal Substructure Property', 'programming');
    classifier.addDocument('Longest Increasing Subsequence', 'programming');
    classifier.addDocument('longest Common Subsequence', 'programming');
    classifier.addDocument('Min Cost Path', 'programming');
    classifier.addDocument('Matrix Chain Multiplication', 'programming');
    classifier.addDocument('0-1 Knapsack Problem', 'programming');
    classifier.addDocument('Longest Palindromic Subsequence', 'programming');
    classifier.addDocument('Dynamic Programming:', 'programming');
    classifier.addDocument('Maximum Sum Increasing Subsequence', 'programming');
    classifier.addDocument('Partition problem', 'programming');
    classifier.addDocument('Suffix Array', 'programming');
    classifier.addDocument('N Queen Problem', 'programming');
    classifier.addDocument('Divide and Conquer', 'programming');
    classifier.addDocument('What is Programming? Beginners Guide - Hackr.io', 'programming');
    classifier.addDocument('Programming & Web Development Online Courses | Udacity', 'programming');
    classifier.addDocument('Programming tutorials, coding problems, and practice ', 'programming');
    classifier.addDocument('Programming Languages Online Courses: From Java to Ruby ...', 'programming');
    classifier.addDocument('Learn C (Introduction and Tutorials to C Programming)', 'programming');
    classifier.addDocument('Prim’s Minimum Spanning Tree Algorithm', 'programming');
    classifier.addDocument('the human genome project', 'biology');
    classifier.addDocument('High School Biology Topics', 'biology');
    classifier.addDocument('Central nervous systems and brain functions', 'biology');
    classifier.addDocument('Energy and chemistry of life', 'biology');
    classifier.addDocument('Plant systems and ecology', 'biology');
    classifier.addDocument('Evolution, ecology and diversity', 'biology');
    classifier.addDocument('Cell structure and specialization', 'biology');
    classifier.addDocument('Heredity and Genetics', 'biology');
    classifier.addDocument('Ecosystems and Interdependence', 'biology');
    classifier.addDocument('Alzheimers Disease', 'biology');
    classifier.addDocument('Introduction to metabolism', 'biology');
    classifier.addDocument('Enzymes', 'biology');
    classifier.addDocument('Photosynthesis and cellular respiration', 'biology');
    classifier.addDocument('Fertilization and development', 'biology');
    classifier.addDocument('Introduction to heredity:', 'biology');
    classifier.addDocument('Sex linkage', 'biology');
    classifier.addDocument('DNA structure and replication', 'biology');
    classifier.addDocument('RNA and protein synthesis', 'biology');
    classifier.addDocument('Biotechnology', 'biology');
    classifier.addDocument('Evolution and natural selection', 'biology');
    classifier.addDocument('Body structure and homeostasis', 'biology');
    classifier.addDocument('The circulatory and respiratory system', 'biology');
    classifier.addDocument('the digestive and excretory system', 'biology');
    classifier.addDocument('the nervous and endocrine system', 'biology');
    classifier.addDocument('the reproductive system', 'biology');
    classifier.addDocument('biochemical cycles', 'biology');
    classifier.addDocument('Regenerative medicine of the future', 'biology');
    classifier.addDocument('Prospects for the development of cell therapy.', 'biology');
    classifier.addDocument('the human genome project', 'biology');
    classifier.addDocument('William Shakespeare | Poetry Foundation', 'english');
    classifier.addDocument('Plot and Setting – Students read and analyze short stories and nonfiction selections in terms of plot and setting', 'english');
    classifier.addDocument('identify the inciting incident, conflict, rising action, climax, resolution, setting and the effect setting has on the plot', 'english');
    classifier.addDocument('Short stories and nonfiction selections', 'english');
    classifier.addDocument('analyze character development by reading short stories and nonfiction selections', 'english');
    classifier.addDocument('examine characters through dialog, physical descriptions, character actions and reactions', 'english');
    classifier.addDocument('The Open Window', 'english');
    classifier.addDocument('The Necklace', 'english');
    classifier.addDocument('examine theme and conflict by identifying universal themes, distinguishing internal and external conflicts and evaluating conflict between characters in several short stories and nonfiction selections', 'english');
    classifier.addDocument('The hangover in literature, from Shakespeare and Burns to Bridget Jones', 'english');
    classifier.addDocument('Brexit Britain: was Jane Austen an original little Englander?', 'english');
    classifier.addDocument('Friday essay: George Eliot 200 years on - a scandalous life, a brilliant mind and a huge literary legacy', 'english');
    classifier.addDocument('Robinson Crusoe 300 years on: Defoe’s unreliable narrative set up enduring colonial myths', 'english');
    classifier.addDocument('Literature sheds light on the history and mystery of the Southern Ocean', 'english');
    classifier.addDocument('ane Eyre translated: 57 languages show how different cultures interpret Charlotte Brontë’s classic novel', 'english');
    classifier.addDocument('Spoilers: making people angry since Victorian times', 'english');
    classifier.addDocument('Shakespeare: research blows away stereotypes and reveals teenagers actually love the Bard', 'english');
    classifier.addDocument('How creativity can help us cultivate moral imagination', 'english');
    classifier.addDocument('Thomas Hardy’s little-known Christmas story for children (with a happy ending)', 'english');
    classifier.addDocument('Man Booker Prize 2018: when writers speak we glimpse the human behind the story', 'english');
    classifier.addDocument('Author of first English novel kept it hidden for ten years – here’s why', 'english');
    classifier.addDocument('Vanity Fair: Thackeray’s classic novel may be too modern for audiences today', 'english');
    classifier.addDocument('Upstart Crow: Shakespeare sitcom is really quite educational', 'english');
    classifier.addDocument('Algebra foundations','math');
    classifier.addDocument('Solving equations & inequalities','math');
    classifier.addDocument('Working with units','math');
    classifier.addDocument('Linear equations & graphs','math');
    classifier.addDocument('Forms of linear equations','math');
    classifier.addDocument('Quadratics: Multiplying & factoring','math');
    classifier.addDocument('Irrational numbers','math');
    classifier.addDocument('Complex numbers','math');
    classifier.addDocument('why do prime number make these spirals','math');
    classifier.addDocument('whats so special about Euler number e?','math');
    classifier.addDocument('What odes it feel like to invent math','math');
    classifier.addDocument('A fascinating thing about fractions','math');
    classifier.addDocument('approximating irrational numbers','math');
    classifier.addDocument('the archimedes number','math');
    classifier.addDocument('primes without a 7','math');
    classifier.addDocument('3 as the sum of 3 cubes','math');
    classifier.addDocument('Fibonacci numbers','math');
    classifier.addDocument('infinite series','math');
    classifier.addDocument('all the numbers','math');
    classifier.addDocument('a colorful unsolved problem','math');
    classifier.addDocument('Heesch numbers and tiling','math');
    classifier.addDocument('card flipping proof','math');
    classifier.addDocument('divisibility tricks','math');
    classifier.addDocument('randomness is random','math');
    classifier.addDocument('Trauma and Silence in No-No Boy: An Interdisciplinary Reading','english');
    classifier.addDocument('The Military Masculine: Storytelling and Role-playing in Phil Klay Stories of War', 'english');
    classifier.addDocument('The Search for Nationhood in Older Scots Literature: A Study of The Flyting of Dunbar and Kennedy and The Tale of Ralph the Collier','english');
    classifier.addDocument('The Captains Compromise: Political Symbolism in Herman Melville Benito Cereno', 'english');
    classifier.addDocument('Class, Gender and the Anxieties of Meritocracy in Jacobean England', 'english');
    classifier.addDocument('Learning to Love the Absolute Other in the Poetry of Seamus Heaney and Michael Longley', 'english');
    classifier.addDocument('the Poetics of Witnessing in the Works of Seamus Heaney', 'english');
    classifier.addDocument('The Birth of the Creative Consciousness: Childhood Spaces, Memory, and Psychoanalytic Play in the Memoirs of Vladimir Nabokov and Virginia Woolf','english');
    classifier.addDocument('Globalization of Chinese Online Literature: Understanding Transnational Reading of Chinese Xuanhuan Novels Among English Readers','english');
    
    


classifier.train();
classifier.save('classifier.json', function(err, classfier){

 });
 natural.BayesClassifier.load('classifier.json', null, function(err, classifier) {
    console.log(classifier.classify('the human genome project and its next steps'));
    console.log(classifier.classify('magic mushrrom as new treatment for depression'));
});


