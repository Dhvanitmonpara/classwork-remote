#include<iostream>
using namespace std;

class ShopItem
{
    int id;
    float price;
    public:
        void setData(int a, float b){
            id = a;
            price = b;
        }
        void getData(void){
            cout<<endl<<"Code of this item is "<< id;
            cout<<endl<<"Price of this item is "<<price;
        }
};

int main(){
    int size = 3;
    ShopItem *ptr = new ShopItem [size];
    int p, i;
    float q;

    for (i = 0; i < size; i++)
    {
        cout<<endl<<"Enter Id and price of item "<< i+1<< " : ";
        cout<<endl<<"ID => ";
        cin>>p;
        cout<<endl<<"Price => ";
        cin>>q;
        // (*ptr).setData(p, q);
        (ptr+i)->setData(p, q);
    }

    for (i = 0; i < size; i++)
    {
        cout<<endl<<"Item number: "<<i+1;
        (ptr+i)->getData();
    }
    
    
    return 0;
}
