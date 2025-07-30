#include <iostream>
using namespace std;


// first code
class Employee
{
    int id;
    int salary;

public:
    void setId(void)
    {
        salary = 122;
        cout << "Enter the id of employee" << endl;
        cin >> id;
    }

    void getId(void)
    {
        cout << "The id of this employee is " << id << endl;
    }
};

int main()
{
    // Employee harry, rohan, lovish, shruti;
    // harry.setId();
    // harry.getId();
    Employee fb[4];
    for (int i = 0; i < 4; i++)
    {
        fb[i].setId();
        fb[i].getId();
    }

    return 0;
}

// second code
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

