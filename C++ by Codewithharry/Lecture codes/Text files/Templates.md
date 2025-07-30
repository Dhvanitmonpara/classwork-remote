# Syntax

```cpp
// class vector {
//     int *arr;
//     int size;
//     public:
// };

#include <iostream>
using namespace std;
 
template <class T>
class vector {
    T *arr;
    int size;
    public:
        vector(T* arr)[
            //code
        ]
        //and many other methods
    
};
 
int main() {
    vector<int> myVec1();
    vector<float> myVec2();
    return 0;
}

```

<br>

# Example of product of two objects

```cpp
#include <iostream>
using namespace std;
 
// class vector
// {
//     public:
//         int *arr;
//         int size;
//         vector(int m)
//         {
//             size = m;
//             arr = new int[size];
//         }
//     int dotProduct(vector &v){
//         int d=0;
//         for (int i = 0; i < size; i++)
//         {
//             d+=this->arr[i]*v.arr[i];
//         }
//         return d;
//     }
// };
 
// int main()
// {
//     vector v1(3); //vector 1
//     v1.arr[0] = 4;
//     v1.arr[1] = 3;
//     v1.arr[2] = 1;
//     vector v2(3); //vector 2
//     v2.arr[0]=1;
//     v2.arr[1]=0;
//     v2.arr[2]=1;
//     int a = v1.dotProduct(v2);
//     cout<<a<<endl;
//     return 0;
// }
 
template <class T>
class vector
{
    public:
        T *arr;
        int size;
        vector(int m)
        {
            size = m;
            arr = new T[size];
        }
    T dotProduct(vector &v){
        T d=0;
        for (int i = 0; i < size; i++)
        {
            d+=this->arr[i]*v.arr[i];
        }
        return d;
    }
};
 
int main()
{
    vector<float> v1(3); //vector 1 with a float data type
    v1.arr[0] = 1.4;
    v1.arr[1] = 3.3;
    v1.arr[2] = 0.1;
    vector<float> v2(3); //vector 2 with a float data type
    v2.arr[0]=0.1;
    v2.arr[1]=1.90;
    v2.arr[2]=4.1;
    float a = v1.dotProduct(v2);
    cout<<a<<endl;
    return 0;
}

```

<br>

# Multiple parameters in templates

```cpp
#include<iostream>
using namespace std;
 
/*
template<class T1, class T2>
class nameOfClass{
    //body
}
*/
 
int main(){
    //body of main
}

// class myClass{
//     public:
//         int data1;
//         char data2;
//     void display(){
//         cout<<this->data1<<" "<<this->data2;
//     }
// };

template<class T1, class T2>
class myClass{
    public:
        T1 data1;
        T2 data2;
        myClass(T1 a,T2 b){
            data1 = a;
            data2 = b;
        }
    void display(){
        cout<<this->data1<<" "<<this->data2;
    }
};

int main()
{
    myClass<int, char> obj(1, 'c');
    obj.display();
}


```

<br>

# Default values in templates

```cpp
#include<iostream>
using namespace std;
 
// default parameters
template <class T1=int, class T2=float, class T3=char>
class Harry{
    public:
        T1 a;
        T2 b;
        T3 c;
        Harry(T1 x, T2 y, T3 z) {
            a = x;
            b = y;
            c = z;
        }
        void display(){
            cout<<"The value of a is "<<a<<endl;
            cout<<"The value of b is "<<b<<endl;
            cout<<"The value of c is "<<c<<endl;
        }
};

int main()
{
    Harry<> h(4, 6.4, 'c');
    h.display();
    cout << endl;
    Harry<float, char, char> g(1.6, 'o', 'c');
    g.display();
    return 0;
}

```

<br>

# Templated functions

```cpp
// template <class T1 = int, class T2 = float>

#include<iostream>
using namespace std;
 
float funcAverage(int a, int b){
    float avg= (a+b)/2.0; 
    return avg;
}
int main(){
    float a;
    a = funcAverage(5,2);
    printf("The average of these numbers is %f",a);
    return 0;
}

template<class T1, class T2>
float funcAverage(T1 a, T2 b){
    float avg= (a+b)/2.0; 
    return avg;
}

template <class T>
void swapp(T &a, T &b)
{
    T temp = a;
    a = b;
    b = temp;
}


int main(){
    float a;
    a = funcAverage(5,2);
    printf("The average of these numbers is %f",a);
    return 0;
}

```

<br>

# Member function templates

```cpp

#include <iostream>
using namespace std;
 
template <class T>
class Harry
{
public:
    T data;
    Harry(T a)
    {
        data = a;
    }
    void display()
    {
        cout << data;
    }
};

template <class T>
class Harry
{
public:
    T data;
    Harry(T a)
    {
        data = a;
    }
    void display();
};
 
template <class T>
void Harry<T> :: display(){
    cout<<data;
}

int main()
{
    Harry<int> h(5.7);
    cout << h.data << endl;
    h.display();
    return 0;
}

void func(int a){
    cout<<"I am first func() "<<a<<endl;
}
 
template<class T>
void func(T a){
    cout<<"I am templatised func() "<<a<<endl;
}

int main()
{
    func(4);  //Exact match takes the highest priority
    return 0;
}

```