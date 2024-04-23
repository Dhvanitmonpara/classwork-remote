#include <iostream>
using namespace std;

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

    return 0;

}