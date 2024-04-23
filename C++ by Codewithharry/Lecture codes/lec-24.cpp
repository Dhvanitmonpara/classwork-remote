#include <iostream>
using namespace std;

class Employee
{
    int id;
    static int count;

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
    Employee::getCount();

    rohan.setData();
    rohan.getData();
    Employee::getCount();

    lovish.setData();
    lovish.getData();
    Employee::getCount();

    return 0;
}
