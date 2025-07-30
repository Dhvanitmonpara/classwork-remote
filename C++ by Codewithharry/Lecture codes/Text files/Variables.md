# Types

| Name      | declaration | size   | Includes                             |
| --------- | ----------- | ------ | ------------------------------------ |
| Integer   | int         | 4 byte | integer without decimal              |
| Character | char        | 1 byte | character values include all symbols |
| Boolean   | bool        | 1 byte | True or False                        |
| Float     | float       | 4 byte | Integer with decimal                 |
| Double    | double      | 8 byte | Extended variable of float           |

</br>

# Global and local variables

Use `:: (scope resolution operator)` to use global variable

```cpp
#include<iostream>

using namespace std;

int c = 45;

int main(){

    // Build in Data types
    int a, b, c;
    cout<<"Enter the value of a:"<<endl;
    cin>>a;
    cout<<"Enter the value of b:"<<endl;
    cin>>b;
    c = a + b;
    cout<<"The sum is "<<c<<endl;
    cout<<"The global c is "<<::c;
return 0;
}
```

</br>

# Double and long double

If you use double of long double without `f` or `l`, compiler consider it as a float value

```cpp
    float d=34.4F;
    long double e = 34.4L;
    cout<<"The size of 34.4 is "<<sizeof(34.4)<<endl;
    cout<<"The size of 34.4f is "<<sizeof(34.4f)<<endl;
    cout<<"The size of 34.4F is "<<sizeof(34.4F)<<endl;
    cout<<"The size of 34.4l is "<<sizeof(34.4l)<<endl;
    cout<<"The size of 34.4L is "<<sizeof(34.4L)<<endl;
    cout<<"The value of d is "<<d<<endl<<"The value of e is "<<e;
```

</br>

# Typecasting

You can typecast variable using `new_variable_type(variable_name)` or `(new_variable_type)variable_name`, both works same.

```cpp
    int a = 45;
    float b = 45.46;
    cout<<"The value of a is "<<(float)a<<endl;
    cout<<"The value of a is "<<float(a)<<endl;

    cout<<"The value of b is "<<(int)b<<endl;
    cout<<"The value of b is "<<int(b)<<endl;
    int c = int(b);

    cout<<"The expression is "<<a + b<<endl;
    cout<<"The expression is "<<a + int(b)<<endl;
    cout<<"The expression is "<<a + (int)b<<endl;
```

</br>

# Variable properties

| Type     | Syntax             | Description                                                                     |
| -------- | ------------------ | ------------------------------------------------------------------------------- |
| constant | `const int a = 32` | You can't change variable value                                                 |
| Static   | `static int a = 1` | Value will be increase in function (value does not destroy after function ends) |

<br>
