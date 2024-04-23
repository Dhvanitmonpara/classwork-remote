#include <bits/stdc++.h>
using namespace std;
class simpleCalculator
{
protected:
    int pl, mi, mul;
    float div;

public:
    void plus(int x, int y)
    {
        pl = x + y;
        cout << "The plus result is " << pl << endl;
    }
    void minus(int x, int y)
    {
        mi = x - y;
        cout << "The minus result is " << mi << endl;
    }
    void multiply(int x, int y)
    {
        mul = x * y;
        cout << "The multiply result is " << mul << endl;
    }
    void divide(int x, int y)
    {
        div = float(x) / y;
        cout << "The divide result is " << div << endl;
    }
};
class scientificCalculator
{
protected:
    float si, co, ta, l2, l10;

public:
    void sine(float x)
    {
        float deg = float((x * M_PI)) / 180;
        si = sin(deg);
        cout << "The sine vlaue of " << x << " degree is " << si << endl;
    }
    void cosine(float x)
    {
        float deg = float((x * M_PI)) / 180;
        co = cos(deg);
        cout << "The consine vlaue of " << x << " degree is " << co << endl;
    }
    void tangent(float x)
    {
        float deg = float((x * M_PI)) / 180;
        ta = tan(deg);
        cout << "The tangent vlaue of " << x << " degree is " << ta << endl;
    }
    void logbase2(float x)
    {

        l2 = log2(x);
        cout << "The logbase2 vlaue of " << x << " is " << l2 << endl;
    }
    void logbase10(float x)
    {
        l10 = log10(x);
        cout << "The logbase10 vlaue of " << x << " is " << l10 << endl;
    }
};
class HybridCalculator : public simpleCalculator, public scientificCalculator
{
};
int main()
{
    ios_base::sync_with_stdio(false);
    HybridCalculator h;
    h.divide(10, 5);
    h.minus(2, 3);
    h.tangent(45);
    h.sine(90);
    return 0;
}