# Declaration

In declaration with values, its on your hands to define array size or not.
Compiler will automatically allocate memory to it according to array size.

```cpp
    int marks[5] = {23, 45, 56, 89};
```

Unlike declaration with values, you must define array size while declaration for declaring array without values.

```cpp
    int marks[5];
```

<br>

# Insertion & extraction of values

Note: Insertion means `cin` and extraction means `cout`.

Insert values while coding.

```cpp
    int mathMarks[4];

    // insert values while coding
    mathMarks[0] = 2278;
    mathMarks[1] = 738;
    mathMarks[2] = 378;
    mathMarks[3] = 578;
```

Take input from a user and note that array indexing starts from `0`.

```cpp
    int mathMarks[4];

    cout<<endl<<"Enter value => ";
    cin>>mathMarks[0];

    cout<<endl<<"Enter value => ";
    cin>>mathMarks[1];

    cout<<endl<<"Enter value => ";
    cin>>mathMarks[2];

    cout<<endl<<"Enter value => ";
    cin>>mathMarks[3];

```

Manual extraction of values.

```cpp
    // printing values
    cout<<mathMarks[0]<<endl;
    cout<<mathMarks[1]<<endl;
    cout<<mathMarks[2]<<endl;
    cout<<mathMarks[3]<<endl;
```

Take input with for loop.

```cpp
    int mathMarks[4];

    // Take input

    for (int i = 0; i < 4; i++) {

        int math;

        cout << endl
             << "Enter a value of mathMarks[" << i << "] => ";
        cin >> math;

        mathMarks[i] = math;

    }

    // Print values

    for (int i = 0; i < 4; i++)
    {
        cout << endl << "Value of mathMarks[" <<i<<"] is " << mathMarks[i];
    }
```

<br>

# Pointers with arrays

Pointer arithemetic.

Mathematical function of Increament of pointer variable :

```
    pointer_location +  value * sizeof(variable_type)
                1024 +      2 *      4 
```

In uper example `1024` is supposed memory location, `2` is increamntal or decreamental value and `4` denotes `sizeof(int)` you can use variable like character with `1` byte of size etc.

```cpp
    // pointer arithemetic
    cout<<*(p++)<<endl;
    cout<<*(++p)<<endl;

    Mathematical function of Increament of pointer variable :
    pointer_location +  value * sizeof(variable_type)
             1024 +      2 *      4 
    In uper example 1024 is supposed memory location, 2 is increamntal or decreamental value and 4 denotes sizeof(int) you can use variable like character with 1 byte of size etc.
```

Extraction of values using pointers.

```cpp

    // array declaration
    int marks[4];

    // value insertion
    mathMarks[0] = 2278;
    mathMarks[1] = 738;
    mathMarks[2] = 378;
    mathMarks[3] = 578;

    // pointer declaration
    int* p = marks;

    // value extraction
    cout<<"The value of *p is "<<*p<<endl;              // *p denotes index of '0'
    cout<<"The value of *(p+1) is "<<*(p+1)<<endl;      // *p denotes index of '1'
    cout<<"The value of *(p+2) is "<<*(p+2)<<endl;      // *p denotes index of '2'
    cout<<"The value of *(p+3) is "<<*(p+3)<<endl;      // *p denotes index of '2'
```
