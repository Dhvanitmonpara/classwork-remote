#include <iostream>
using namespace std;

void swap(int *a, int *b);

int main() {

    int num1, num2;

    cout<<endl<<"Enter first number => ";
    cin>>num1;
    cout<<endl<<"Enter second number => ";
    cin>>num2;

    // cout<<endl<<"Value before swapping is "<<num1;
    // cout<<endl<<"Value before swapping is "<<num2;

    swap(&num1, &num2);

    cout<<endl<<"Value after swapping is "<<num1;
    cout<<endl<<"Value after swapping is "<<num2;

    return 0;

}

void swap(int *a, int *b) {

    int temp = *a;
    *a = *b;
    *b = temp;

}
