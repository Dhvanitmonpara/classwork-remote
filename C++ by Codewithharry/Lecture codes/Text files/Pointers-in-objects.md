# `new` and `delete` keywords

```cpp
#include<iostream>
using namespace std;

int main(){
    // Basic Example
    int a = 4;
    int* ptr = &a;
    cout<<"The value of a is "<<*(ptr)<<endl;
  
    return 0;
}

```

### `new` keyword

- Purpose: Allocates memory on the heap during runtime.
- Usage: int* myInt = new int;
- Memory Allocation: Allocates memory dynamically.
- Initialization: Allocated memory is not initialized.
- Example: int* myArray = new int[5];

```cpp
#include<iostream>
using namespace std;

int main(){
    
    float *p = new float(40.78);
    cout << "The value at address p is " << *(p) << endl;
    
    return 0;
}

```

Another example of `new` keyword.

```cpp
#include<iostream>
using namespace std;

int main(){
  
    int *arr = new int[3];
    arr[0] = 10;
    arr[1] = 20;
    arr[2] = 30;
    cout << "The value of arr[0] is " << arr[0] << endl;
    cout << "The value of arr[1] is " << arr[1] << endl;
    cout << "The value of arr[2] is " << arr[2] << endl;
   
    return 0;
}

```

### `delete` keyword

- Purpose: Deallocates memory allocated with 'new'.
- Usage: delete myInt;
- Memory Deallocation: Releases allocated memory.
- Array Deallocation: Use delete[] for arrays.
- Prevention: Match 'new' with 'delete' and 'new[]' with 'delete[]'.
- Example: delete myInt; delete[] myArray;


```cpp
#include<iostream>
using namespace std;

int main(){
  
    int *arr = new int[3];
    arr[0] = 10;
    arr[1] = 20;
    arr[2] = 30;
    delete[] arr;
    cout << "The value of arr[0] is " << arr[0] << endl;
    cout << "The value of arr[1] is " << arr[1] << endl;
    cout << "The value of arr[2] is " << arr[2] << endl;
   
    return 0;
}

```
<br>

# Pointers and Arrow operators

```cpp
#include<iostream>
using namespace std;

class Complex{
    int real, imaginary;
    public:
        void getData(){
            cout<<"The real part is "<< real<<endl;
            cout<<"The imaginary part is "<< imaginary<<endl;
        }

        void setData(int a, int b){
            real = a;
            imaginary = b;
        }

};
int main(){
    Complex *ptr = new Complex;
    (*ptr).setData(1, 54); is exactly same as
    (*ptr).getData(); is as good as 

    return 0;
}

```
Another example

```cpp
#include<iostream>
using namespace std;

class Complex{
    int real, imaginary;
    public:
        void getData(){
            cout<<"The real part is "<< real<<endl;
            cout<<"The imaginary part is "<< imaginary<<endl;
        }

        void setData(int a, int b){
            real = a;
            imaginary = b;
        }

};
int main(){
    Complex *ptr = new Complex;
    ptr->setData(1, 54);
    ptr->getData(); 

    // Array of Objects
    Complex *ptr1 = new Complex[4]; 
    ptr1->setData(1, 4); 
    ptr1->getData();
    return 0;
}

```

<br>

# Array of objects using pointers

```cpp
#include<iostream>
using namespace std;

class ShopItem
{
    int id;
    float price;
    public:
        void setData(int a, float b){
            id = a;
            price = b;
        }
        void getData(void){
            cout<<"Code of this item is "<< id<<endl;
            cout<<"Price of this item is "<<price<<endl;
        }
};

int main(){
    int size = 3;
    ShopItem *ptr = new ShopItem [size];
    ShopItem *ptrTemp = ptr;
    int p, i;
    float q;
    for (i = 0; i < size; i++)
    {
        cout<<"Enter Id and price of item "<< i+1<<endl;
        cin>>p>>q;
        // (*ptr).setData(p, q);
        ptr->setData(p, q);
        ptr++; 
    }

    for (i = 0; i < size; i++)
    {
        cout<<"Item number: "<<i+1<<endl;
        ptrTemp->getData();
        ptrTemp++;
    }
    
    
    return 0;
}

```