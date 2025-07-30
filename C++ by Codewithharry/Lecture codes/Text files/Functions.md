# Declaration

Function declaration.

```cpp
// function prototype
void gm();

// main function
int main(){

    gm();
    
    return 0;
}

// function to print Good morning
void gm(){
    cout<<"Hello, Good Morning";
}
```

Function argument conditions.

```cpp
    // type function-name (arguments);
    int sum(int a, b); //--> Not Acceptable 
    int sum(int a, int b); //--> Acceptable
    int sum(int, int); //--> Acceptable 

    void g(void); //--> Acceptable 
    void g(); //--> Acceptable
```

Function to get sum of two numbers using return value.

```cpp
int sum(int, int); 

int main(){
    int num1, num2;
    cout<<endl<<"Enter first number => ";
    cin>>num1;
    cout<<endl<<"Enter second number => ";
    cin>>num2;
    // num1 and num2 are actual parameters
    cout<<"The sum is "<<sum(num1, num2);
    return 0;
}

int sum(int a, int b){
    // Formal Parameters a and b will be taking values from actual parameters num1 and num2.
    int c = a+b;
    return c;
    // you can directly use "return a+b;" so you don't need to declare "int c"
}
```

<br>


# Function, pointers and reference

```cpp
void swap(int a, int b){ //temp a b
    int temp = a;        //4   4  5   
    a = b;               //4   5  5
    b = temp;            //4   5  4 
}

// Call by reference using pointers
void swapPointer(int* a, int* b){ //temp a b
    int temp = *a;                //4   4  5   
    *a = *b;                      //4   5  5
    *b = temp;                    //4   5  4 
}

// Call by reference using C++ reference Variables
// int & 
void swapReferenceVar(int &a, int &b){ //temp a b
    int temp = a;                      //4   4  5   
    a = b;                             //4   5  5
    b = temp;                          //4   5  4 
    // return a;
}

int main(){

    int x =4, y=5;
    
    cout<<"The value of x is "<<x<<" and the value of y is "<<y<<endl;
    
    swap(x, y); // This will not swap a and b
    swapPointer(&x, &y); //This will swap a and b using pointer reference
    swapReferenceVar(x, y); //This will swap a and b using reference variables
    swapReferenceVar(x, y) = 766; //This will swap a and b using reference variables
   
    cout<<"The value of x is "<<x<<" and the value of y is "<<y<<endl; 
   
    return 0;
}

```

<br>

# Function attributes

### Inline function

Inline function does not destroy variables at end of the function execution, It stores function block into cache memory but with reset values of variables (junk values like newly declared variable) so the code run faster and doesn't need to re-execute again and again when programmer calls it multiple times.

It has specific use cases.

```cpp
inline int product(int a, int b){
    // Not recommended to use below lines with inline functions
    // static int c=0; // This executes only once
    // c = c + 1; // Next time this function is run, the value of c will be retained
    return a*b;
}

int main(){

    int a, b;
    
    cout<<"Enter the value of a => "<<endl;
    cin>>a;
    
    cout<<"Enter the value of b => "<<endl;
    cin>>b;
    
    cout<<"The product of a and b is "<<product(a,b)<<endl;
    // returned value will replace function calling statement, In this case it is 'product(a, b)'

    return 0;
}
```

### Static variable

Value will be increase in function (value does not destroy after function ends), run this code for better understanding.

```cpp
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
    cout << endl << "value is " <<sum(a, b);

    return 0;
}
```

### Constant variable

You can't change variable value, It prevents accidental over-writes.

### Default attribute

As it's name shows, It has default value if programmer doesn't put any parameter for it.

Note: Always write default arguments at right side.

```cpp

float moneyReceived(int currentMoney, float factor=1.04){
    return currentMoney * factor;
}

int main(){
    
    int money = 100000;
    
    cout<<"If you have "<<money<<" Rs in your bank account, you will recive "<<moneyReceived(money)<< "Rs after 1 year"<<endl;
    
    cout<<"For VIP: If you have "<<money<<" Rs in your bank account, you will recive "<<moneyReceived(money, 1.1)<< " Rs after 1 year";
    
    return 0;
}
```