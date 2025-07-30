#include <iostream>
using namespace std;

class Base
{

    int data1;

public:
    int data2;
    void setData();
    int getData1();
    int getData2();
};

void Base ::setData(void)
{
    data1 = 10;
    data2 = 20;
}

int Base ::getData1()
{
    return data1;
}

int Base ::getData2()
{
    return data2;
}

class Derived : public Base
{
    int data3;

public:
    void process();
    int getData3();
};

void Derived ::process(void)
{
    data3 = data2 * getData1();
}

int Derived ::getData3()
{
    return data3;
}

int main()
{

    Derived der;
    der.setData();
    cout << endl
         << der.getData1();
    cout << endl
         << der.getData2();
         der.process();
    cout << endl << der.getData3();
    return 0;
}