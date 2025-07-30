#include <iostream>
using namespace std;

double factorial(double value) {

    if (value < 2)
    {
        return 1;
    }

    return value * factorial(value - 1);

}

double fib(double n) {

    if (n < 2) {
        return 1;
    }

    return fib(n-1) + fib(n-2);

}

int main() {

    double num;

    cout << endl << "Enter a value => ";
    cin >> num;

    cout<<endl<<"Factorial of "<<num<<" is "<<factorial(num);
    cout<<endl<<"Fibbonachi of "<<num<<" is "<<fib(num);

    return 0;

}