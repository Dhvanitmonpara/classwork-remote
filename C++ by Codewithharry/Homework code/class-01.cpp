#include <iostream>
using namespace std;

class student {

    private:
    int rollNo;
    string name;

    public:
    void setData(int snum, string sname);
    string city = "Ahmedabad";
    string school = "Ais";
    void getData() {
        cout<<endl<<rollNo;
        cout<<endl<<name;
        cout<<endl<<city;
        cout<<endl<<school;
    }

};

void student :: setData(int snum, string sname) {
    rollNo = snum;
    name = sname;
};

int main() {

    student Aman;

    Aman.setData(1, "Aman");
    Aman.getData();

    return 0;

}