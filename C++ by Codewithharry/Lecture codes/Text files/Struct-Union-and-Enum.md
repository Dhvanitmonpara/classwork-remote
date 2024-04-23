# Structures (struct)

It defines outside of `main()` function with semicolon at the end, you can use it like a user-defined data type.

```cpp
struct employee
{
    int eId; //4 byte
    char favChar; //1 byte
    float salary; //4 byte

};

int main() {

    // declaring struct typed variables
    struct employee harry;
    struct employee shubham;        // variable 1
    struct employee rohanDas;       // variable 2

    // defining values to struct
    harry.eId = 1;
    harry.favChar = 'c';
    harry.salary = 120000000;

    // priting whole struct
    cout<<"The value is "<<harry.eId<<endl; 
    cout<<"The value is "<<harry.favChar<<endl; 
    cout<<"The value is "<<harry.salary<<endl; 

    return 0;
}
```

### Typedef struct 

Its like alias for struct.

```cpp

    typedef struct employee
{
    /* data */
    int eId; //4
    char favChar; //1
    float salary; //4
} ep;

int main() {

    // declaring struct typed variable
    ep harry;                      // variable with typeof alias
    struct employee shubham;
    struct employee rohanDas;

    // same code as above
    // defining values to struct
    harry.eId = 1;
    harry.favChar = 'c';
    harry.salary = 120000000;

    // printing values of struct
    cout<<"The value is "<<harry.eId<<endl; 
    cout<<"The value is "<<harry.favChar<<endl; 
    cout<<"The value is "<<harry.salary<<endl;

    return 0; 
}
```

<br>

# Union

Just like struct it defines outside of `main()` function with semicolon at the end, you can use it like a user-defined data type.

```cpp
union money
{
    int rice; //4 byte
    char car; //1 byte
    float pounds; //4 byte
    
};

int main() {

    union money m1;
    m1.rice = 34;
    m1.car = 'c';
    cout<<m1.car;

    return 0;

}
```

<br>

# Difference between struct and union

Both Struct and Union are user-define data types which contains multiple type of variables.

In a struct, you can assign values to all variables independently. In contrast, in a union, assigning a value to one variable will overwrite another variable."

In a struct, each member has its own memory space, and the size of the struct is the sum of the sizes of its members.

In a union, all members share the same memory space. The size of the union is determined by the largest member.

```cpp
struct employee
{
    /* data */
    int eId; //4
    char favChar; //1
    float salary; //4

    // if you assign values to "int eId" and "float salary", it stil allocates total memory which is 4 + 1 + 4 = 9 bytes
};

union money
{
    /* data */
    int rice; //4
    char car; //1
    float pounds; //4

    // if you assign a value to any of these variable and then you assign a value to another variable, union will overwrite it.
    // in summary you can only use one variable at time.
};
```

# Enumerations (Enums)

Enums, short for enumerations, are user-defined data types in C++ used to assign names to integral constants, making the code more readable and maintainable.

```cpp
enum EnumName {
    Constant1,
    Constant2,
    // Add more constants as needed
};
```

Enum example for breackfast, lunch or dinner.

```cpp
    // data-type declaration
    enum Meal{ breakfast, lunch, dinner};

    // variable declaration
    Meal m1 = lunch;

    // checking is variable value is true or false (1 or 0)
    cout<<(m1==2);

    // printing value of the variable
    cout<<breakfast;
    cout<<lunch;
    cout<<dinner; 
```

Weekdays using enum.

```cpp
#include <iostream>
using namespace std;

enum Weekdays {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};

int main() {
    Weekdays today = Wednesday;
    
    if(today == Wednesday) {
        cout << "It's hump day!" << endl;
    }
    
    return 0;
}
```

<br>

**Points to remember:**

- Enums provide a way to define a set of named integer constants.
- By default, the values of the constants start from 0 and increment by 1.
- Enums can be explicitly assigned values if needed.
- Enums improve code readability and reduce the likelihood of using incorrect integer values.