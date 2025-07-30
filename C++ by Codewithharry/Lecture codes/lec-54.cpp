#include<iostream>
using namespace std;

// class A{
//     int a;
//     public:
//         vetData(int a){
//             this->a = a;
//         }oid s

//         // void getData(){
//             cout<<"The value of a is "<<a<<endl;
//         // }
// };

// int main(){
//     A a;
//     a.setData(4);
//     a.getData();
//     return 0;
// }

// Code II

class A{
    int a;
    public:
         A &setData(int a){  // Return type is A
            this->a = a;
            return *this;
        }

        void getData(){
            cout<<"The value of a is "<<a<<endl;
        }
};

int main(){
    A a;
    a.setData(4).getData();
    return 0;
}
