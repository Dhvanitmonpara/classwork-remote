#include <iostream>
using namespace std;

float sum(int x, int y){


    static int z = 0;
    z = z + 1;

    return z;
}

int main(){
    int a, b;
    
    cout<<"Enter a => ";
    cin >> a;
    cout<<"Enter b => ";
    cin >> b;

    cout << endl << "value is " <<sum(a, b);
    cout << endl << "value is " <<sum(a, b);
    cout << endl << "value is " <<sum(a, b);
    cout << endl << "value is " <<sum(a, b);

    return 0;
}