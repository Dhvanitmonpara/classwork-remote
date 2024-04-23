#include <iostream>
#include <cmath>
using namespace std;

class ScientificCalculator;

// Simple calculator

class SimpleCalculator
{
protected:
    float num1;
    float num2;
    friend void valuePassing(SimpleCalculator&, ScientificCalculator&);

public:
    SimpleCalculator()
    {
        cout << endl
             << "Enter first value => ";
        cin >> num1;
        cout << endl
             << "Enter second value => ";
        cin >> num2;
    }
    int addition(void);
    int subtraction(void);
    int multiplication(void);
    int division(void);
};

int SimpleCalculator::addition(void)
{
    return num1 + num2;
}

int SimpleCalculator::subtraction(void)
{
    return num1 - num2;
}

int SimpleCalculator::multiplication(void)
{
    return num1 * num2;
}

int SimpleCalculator::division(void)
{
    return num1 / num2;
}

// Scientific calculator

class ScientificCalculator
{
protected:
    float num1;
    float num2;

public:
    void setNum1(float value) {
        num1 = value;
    }

    void setNum2(float value) {
        num2 = value;
    }

    float squareRootFirstValue(void);
    float squareFirstValue(void);
    float squareRootSecondValue(void);
    float squareSecondValue(void);
};

float ScientificCalculator::squareRootFirstValue(void)
{
    float c = sqrt(num1);
    return c;
}

float ScientificCalculator::squareFirstValue(void)
{
    float c = num1 * num1;
    return c;
}

float ScientificCalculator::squareRootSecondValue(void)
{
    float c = sqrt(num2);
    return c;
}

float ScientificCalculator::squareSecondValue(void)
{
    float c = num2 * num2;
    return c;
}

// Hybrid calculator

class hybridCalculator : public SimpleCalculator, public ScientificCalculator
{
    // hybridCalculator(void);
};

// Move valuePassing after the complete definition of ScientificCalculator
void valuePassing(SimpleCalculator &x, ScientificCalculator &y) {
    y.setNum1(x.num1);
    y.setNum2(x.num2);
}

int main()
{
    hybridCalculator sum;
    cout<<endl<<"The addition of given values : "<<sum.addition();
    cout<<endl<<"The subtraction of given values : "<<sum.subtraction();
    cout<<endl<<"The multiplication of given values : "<<sum.multiplication();
    cout<<endl<<"The division of given values : "<<sum.division();
    cout<<endl<<"The square root of first value : "<<sum.squareRootFirstValue();
    cout<<endl<<"The square root of second value : "<<sum.squareFirstValue();
    cout<<endl<<"The root of first value : "<<sum.squareRootSecondValue();
    cout<<endl<<"The root of second value : "<<sum.squareSecondValue();

    return 0;
}
