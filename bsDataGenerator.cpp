#include <iostream>
#include <string>
using namespace std;
string a[200];
int sze;
int main(){
    string s;
    for(int i=0;i<200;i++){
        getline(cin, s);
        if(s=="!"){
            sze = i;
            break;

        } 
        a[i] = s;

    }
    for(int i=0;i<sze;i++){
        printf("classifier.addDocument('%s', 'programming')\n", a[i]);
    }
    
}