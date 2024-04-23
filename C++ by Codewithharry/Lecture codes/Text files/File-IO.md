# Theory

The file can be of any type whether it is a file of a C++ program, file of a game, or any other type of file. There are two main operations which can be performed on files

- Read File
- Write File

<br>

![File structure Diagram](https://cwh-full-next-space.fra1.digitaloceanspaces.com/videos/cpp-tutorials-in-hindi-59/base64.webp)

```cpp
#include<iostream>
#include<fstream>

using namespace std;

int main(){
    string st = "Harry bhai";
    // Opening files using constructor and writing it
    ofstream out("sample60.txt"); // Write operation
    out<<st;

    return 0;
}

// second code

int main(){
    string st2;
    // Opening files using constructor and reading it
    ifstream in("sample60b.txt"); // Read operation
    in>>st2;
    getline(in, st2);  
    cout<<st2;

    return 0;
}

```

```cpp
#include <iostream>
#include <fstream>

using namespace std;

int main()
{

    // connecting our file with hout stream
    ofstream hout("sample60.txt");

    // creating a name string variable and filling it with string entered by the user
    string name;
    cout << "Enter your name: ";
    cin >> name;

    // writing a string to the file
    hout << name + " is my name";

    // disconnecting our file
    hout.close();
    // connecting our file with hin stream
    ifstream hin("sample60.txt");

    // creating a content string variable and filling it with string present there in the text file
    string content;
    hin >> content;
    cout << "The content of the file is: " << content;

    // disconnecting our file
    hin.close();
    return 0;
}

/*

string st;
// Opening files using constructor and reading it
ifstream in("this.txt"); // Read operation
in >> st;

string st = "Harry bhai";
// Opening files using constructor and writing it
ofstream out("this.txt"); // Write operation
out << st;

<object_name>.close();

*/
```

```cpp
#include <iostream>
#include <fstream>
 
using namespace std;
 
int main()
{
 
    // declaring an object of the type ofstream
    ofstream out;
 
    //connecting the object out to the text file using the member function open()
    out.open("sample60.txt");
 
    //writing to the file
    out <<"This is me\n";
    out <<"This is also me";
    //closing the file connection
    out.close();
    return 0;
}

// second code

#include <iostream>
#include <fstream>
#include <string>
 
using namespace std;
 
int main()
{
    // declaring an object of the type ifstream
    ifstream in;
    //declaring string variable st
    string st;
    //opening the text file into in
    in.open("sample60.txt");
 
    // giving output the string lines by storing in st until the file reaches the end of it
    while (in.eof()==0) 
    {
        // using getline to fill the whole line in st
        getline(in,st);
        cout<<st<<endl;
    }
    return 0;
}

```