# Arrays in classes

```cpp
#include <iostream>
using namespace std;

class Shop
{
    int itemId[100];
    int itemPrice[100];
    int counter;

public:
    void initCounter(void) { counter = 0; }
    void setPrice(void);
    void displayPrice(void);
};

void Shop ::setPrice(void)
{
    cout << endl << "Enter Id of your item no " << counter + 1 << " => ";
    cin >> itemId[counter];
    cout << endl << "Enter Price of your item => ";
    cin >> itemPrice[counter];
    counter++;
}

void Shop ::displayPrice(void)
{
    for (int i = 0; i < counter; i++)
    {
        cout << "The Price of item with Id " << itemId[i] << " is " << itemPrice[i] << endl;
    }
}

int main()
{
    Shop dukaan;
    dukaan.initCounter();
    dukaan.setPrice();
    dukaan.setPrice();
    dukaan.setPrice();
    dukaan.displayPrice();
    return 0;
}

```

<br>

# Memory allocation

The memory is only allocated to the variables of the class when the object is created.

visit this link for diagram - https://programmingknow.com/wp-content/uploads/2021/09/memory-allocation-for-objects-in-c-plus-plus.jpg

<br>

# Static data member and methods

The static variable gets overwritten when the program takes input for it. Static function can only access static members (static variables and other static functions)

The static variable is a shared variable for all objects (each one will overwrite and use it according to requirements), whereas a new instance variable (normal variable) is declared with each object.

```cpp
#include <iostream>
using namespace std;

class Employee
{
    int id;
    static int count;       // static variable declaration

public:
    void setData(void)
    {
        cout << endl << "Enter the id => ";
        cin >> id;
        count++;
    }
    void getData(void)
    {
        cout << endl
             << "The id of this employee is " << id << " and this is employee number " << count;
    }

    // static funtion declaration
    static void getCount(void)
    {
        // cout<<id; // throws an error
        cout << endl
             << "The value of count is " << count << endl;
    }
};

// Count is the static data member of class Employee
int Employee::count; // Default value is 0

int main()
{
    Employee harry, rohan, lovish;
    // harry.id = 1;
    // harry.count=1; // cannot do this as id and count are private

    harry.setData();
    harry.getData();
    Employee::getCount();     // static function calling 

    rohan.setData();
    rohan.getData();
    Employee::getCount();     // static function calling 

    lovish.setData();
    lovish.getData();
    Employee::getCount();     // static function calling 

    return 0;
}

```
<br>

# Arrays in objects

```cpp
#include <iostream>
using namespace std;

class product
{

private:
    int id;
    int price;

public:
    void setValue(int idValue, int priceValue)
    {

        id = idValue;
        price = priceValue;
    }

    void getValue(void)
    {

        cout << endl
             << "The price of " << id << " is " << price;
    }
};

int main()
{

    product bag[10];

    for (int i = 1; i <= 10; i++)
    {
        cout << endl
             << "Enter a price of " << i << " => ";

        int temp;
        cin >> temp;

        bag[i].setValue(i, temp);
    }

    for (int i = 1; i <= 10; i++)
    {

        bag[i].getValue();
    }

    return 0;
}
```