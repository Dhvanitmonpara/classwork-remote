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