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