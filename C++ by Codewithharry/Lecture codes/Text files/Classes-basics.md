# Classes and objects

C++ --> initially called --> C with classes by stroustroup
class --> extension of structures (in C)
structures had limitations

members are public

No methods

- classes --> structures + more
- classes --> can have methods and properties
- classes --> can make few members as private & few as public
- structures in C++ are typedefed

<br>

# Class declaration

```cpp

    class student {

        // declaration and logic
        int roll_no;

    }

    int main() {

        student Aman;  // object declaration

        // value inserting and function calling
        Aman.roll_no = 20;

    }


```

Example:

```cpp
    class student {

        private:    // private
        int roll;
        bool fees;
        
        public:     // public
        string name;
        string city;

        // function prototype to insert data
        void setData(int num, bool paidfees);

        void getData() {
            cout<<endl<<roll;
            cout<<endl<<fees;
            cout<<endl<<name;
            cout<<endl<<city;
        }
    }

    // function to insert data (watch video number 21 of C++ playlist by codewithharry for better understanding)

    void student :: setData(int num, bool paidfees) {
        roll = num;
        fees = paidfees;
    }

    // main function
    int main() {

        student Aman;   // object declaration

        // values insertion
        Aman.name = "Aman";
        Aman.city = "Ahmedabad";

        // functions
        setData(1, true);
        getData()
    }

```

Or pogrammer can directly declare object within classes like this:

```cpp

class Employee{
            // Class definition
} harry, rohan, lovish;

```
