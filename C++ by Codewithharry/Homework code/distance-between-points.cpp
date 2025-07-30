// create a function which takes two point object and computes the distance between those two points
// Hint: make it a friend function

#include <iostream>
#include <cmath>
using namespace std;

class point
{

    int x;
    int y;

public:
    point(int, int);
    friend void distance(point a, point b);
};

point::point(int u, int v)
{
    x = u;
    y = v;
}

void distance(point a, point b)
{

    int n1 = (b.x - a.x);
    int n2 = (b.y - a.y);

    cout << endl
         << "Distance between two points is "
         << sqrt(n1 * n1 + n2 * n2);
}

int main()
{

    point a(1, 1);
    point b(1, 1);

    distance(a, b);

    return 0;
}