# Nested functions

Programmer can use functions inside other functions.
For this example `chk_bin()` is nested function under `ones_compliment()`

```cpp
#include <iostream>
#include <string>
using namespace std;

class binary
{
private:
    string s;
    void chk_bin(void);

public:
    void read(void);
    void ones_compliment(void);
    void display(void);
};

void binary::read(void)
{
    cout << endl << "Enter a binary number => ";
    cin >> s;
}

void binary::chk_bin(void)
{
    for (int i = 0; i < s.length(); i++)
    {
        if (s.at(i) != '0' && s.at(i) != '1')
        {
            cout << "Incorrect binary format" << endl;
            exit(0);
        }
    }
}

void binary::ones_compliment(void)
{
    chk_bin();
    for (int i = 0; i < s.length(); i++)
    {
        if (s.at(i) == '0')
        {
            s.at(i) = '1';
        }
       else
        {
            s.at(i) = '0';
        }
    }
}

void binary::display(void)
{
    cout<<"Displaying your binary number : ";
    for (int i = 0; i < s.length(); i++)
    {
        cout << s.at(i);
    }
    cout<<endl;
}

int main()
{
    binary b;
    b.read();
    // b.chk_bin();
    b.display();
    b.ones_compliment();
    b.display();

    return 0;
}

```

<br>

# Passing object as argument

```cpp
// Passing object as function arguments

class complex {

    private:
        int a;
        int b;

    public:
        void setData(int num1, int num2) {
            a = num1;
            b = num2;
        }

// its like varibale type and variable name

                     //   int     a,  int     b
        void setDataBySum(complex o1, complex o2) {
            a = o1.a + o2.a;
            b = o1.b + o2.b;
        }

        void getData(void) {
            cout<<endl<<"The number is "<<a<<" + "<<b<<"i";
        }

};

int main() {

    complex c1, c2, c3;

    c1.setData(1, 2);
    c1.getData();

    c2.setData(3, 4);
    c2.getData();

    c3.setDataBySum(c1, c2);
    c3.getData();

}

```

# Friend functions

```cpp
#include<iostream>
using namespace std;

// 1 + 4i
// 5 + 8i
// -------
// 6 + 12i 
class Complex{
    int a, b;
    friend Complex sumComplex(Complex o1, Complex o2);
    public:
        void setNumber(int n1, int n2){
            a = n1;
            b = n2;
        }

        // Below line means that non member - sumComplex funtion is allowed to do anything with my private parts (members)
        void printNumber(){
            cout<<"Your number is "<<a<<" + "<<b<<"i"<<endl;
        }
};

Complex sumComplex(Complex o1, Complex o2){
    Complex o3;
    o3.setNumber((o1.a + o2.a), (o1.b+o2.b))
    ;
    return o3;
}

int main(){
    Complex c1, c2, sum;
    c1.setNumber(1, 4);
    c1.printNumber();

    c2.setNumber(5, 8);
    c2.printNumber();

    sum = sumComplex(c1, c2);
    sum.printNumber();

    return 0;
}

```

### Properties of friend functions

1. Not in the scope of class
2. since it is not in the scope of the class, it cannot be called from the object of that class. c1.sumComplex() == Invalid
3. Can be invoked without the help of any object
4. Usually contans the objects as arguments
5. Can be declared inside public or private section of the class
6. It cannot access the members directly by their names and need object_name.member_name to access any member.
 
<br>

### Swapping values of objects:

```cpp
#include <iostream>
using namespace std;

class c2;
class c1{
    int val1;
    friend void swapper(c1 &x, c2 &y);
    public:
        void setValue(int num) {
            val1 = num;
        }
        void getValue(void) {
            cout<<endl<<"The first value is "<<val1;
        }
};

class c2{
    int val2;
    friend void swapper(c1 &x, c2 &y);
    public:
        void setValue(int num) {
            val2 = num;
        }
        void getValue(void) {
            cout<<endl<<"The first value is "<<val2;
        }
};

void swapper(c1 &x, c2 &y) {
    int temp = x.val1;
    x.val1 = y.val2;
    y.val2 = temp;
}

int main() {

    c1 oc1;
    c2 oc2;

    oc1.setValue(10);
    oc1.getValue();

    oc2.setValue(20);
    oc2.getValue();

    swapper(oc1, oc2);

    cout<<endl<<endl<<"The value after swapping :";
    oc1.getValue();
    oc2.getValue();

    return 0;

}
```