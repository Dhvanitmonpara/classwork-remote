#include <iostream>
#include <cmath>
using namespace std;

class inputVal
{
protected:
    float num1;
    float num2;

    inputVal()
    {
        cout << endl
             << "Enter first value => ";
        cin >> num1;
        cout << endl
             << "Enter second value => ";
        cin >> num2;
    }
};

class simpleCalc : virtual public inputVal
{
protected:
    float num1;
    float num2;

public:
    void simpleOperations(void)
    {
        cout << endl
             << "Addition of given values : " << num1 + num2;
        cout << endl
             << "Subtraction of given values : " << num1 - num2;
        cout << endl
             << "Multiplication of given values : " << num1 * num2;
        cout << endl
             << "Division of given values : " << num1 / num2;
    }
};

class scientificCalc : virtual public inputVal
{

public:
    void scientificOperations(void)
    {
        cout << endl
             << "Sqaare root of given values : " << sqrt(num1);
        cout << endl
             << "Sqaare root of given values : " << sqrt(num2);
        cout << endl
             << "Square of given values : " << num1 * num1;
        cout << endl
             << "Square of given values : " << num2 * num2;
    }
};

class hybridCalc : public simpleCalc, public scientificCalc
{
public:
    hybridCalc()
    {
        cout << endl
             << endl
             << "Simple opeartions : " << endl;
        simpleOperations();
        cout << endl
             << endl
             << "Scientific opeartions : " << endl;
        scientificOperations();
    }
};

int main()
{
    hybridCalc sum;
    return 0;
}