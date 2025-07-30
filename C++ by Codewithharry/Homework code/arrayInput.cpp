#include <iostream>
using namespace std;

int main()
{

    int mathMarks[4];

    // for (int i = 0; i < 4; i++) {

    //     int math;

    //     cout << endl
    //          << "Enter a value of mathMarks[" << i << "] => ";
    //     cin >> math;

    //     mathMarks[i] = math;

    // }

    // for (int i = 0; i < 4; i++)
    // {
    //     cout << endl << "Value of mathMarks[" <<i<<"] is " << mathMarks[i];
    // }

    cout<<endl<<"Enter value => ";
    cin>>mathMarks[0];
    cout<<endl<<"Enter value => ";
    cin>>mathMarks[1];
    cout<<endl<<"Enter value => ";
    cin>>mathMarks[2];
    cout<<endl<<"Enter value => ";
    cin>>mathMarks[3];
    
    cout<<mathMarks[0]<<endl;
    cout<<mathMarks[1]<<endl;
    cout<<mathMarks[2]<<endl;
    cout<<mathMarks[3]<<endl;

    return 0;
}