#include <iostream>
using namespace std;
int x = 50;

int main() {

    int a = 4, b = 5;
    int x = 10;

    cout << endl << "This is tutorial 4, Here the value of a is " << a << " and the values of b is " << b;

    cout << endl << "This is global variable : " << ::x; 
    cout << endl << "This is local variable : " << x; 

    return 0;

}

// Global variable