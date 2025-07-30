#include <iostream>
using namespace std;

typedef struct character
{
    int health;
    char name;
    float level;

} ch;

int main()
{

    struct character adam;

    adam.health = 86;
    adam.name = 'a';
    adam.level = 69;

    cout << "Health of Adam is " << adam.health << endl;
    cout << "name of Adam is " << adam.name << endl;
    cout << "level of Adam is " << adam.level << endl;

    enum meal{breackfast, dinner, lunch};
    meal m1 = breackfast;
    cout<<(m1==1);

    return 0;
}