import 'dart:io';

// Summary: dart == Python + C++ + Java + JavaScript

// this is main function of the dart program just like c/c++
void main() {
  print('Hello, World!');

  stdout.write(
      'What is your name? '); // you've to import dart:io to use stdout and stdin methods
  var name = stdin.readLineSync(); // input

  print('Hello, $name!');

  var human = new Human("Krish"); // Btw semicolons are important in dart
  human.sayHello();

  var student = Student('Aryan', 20, 'Gujarat University');
  student.greet();

  // Datatypes

  String a = "Hello";
  int b = 10;
  num c = 10.5;
  double d = 10.5;
  bool e = true;

// these are not datatypes, and these works same as javascript
  var f =
      null; // btw var in dart is works like let in javascript but named as var so don't be confused
  const g = 10;
  final h = 30; // its like java
  // if you're thinking what is the difference between final and const, so there are two major differences
  // you can declare a variable with final without assigning any value that you can't do it with const
  // you can't override a list or hashmap in both but you can add or remove elements using list methods in final keyword but not in const

//   functions are same as c/c++ so refer to the notes

  var list = [10, 30, 40, 50]; // list == array (same as python)
  list.add(60);
  list.removeAt(2);
  // if you want to know about more list methods then install dart extension and then write 'list.' your'll get all the list methods in suggestions

// hashmaps or maps are same as python
  var hashMap = {
    "name": "Ironman",
    "job": "Save the world",
    "power": "money" // this was suggested by Ai (codeium) skull wala emoji
  }; // yaha bhi semicolon chahiye

  print(hashMap["name"]);

  print(a);
  print(b);
  print(c);
  print(d);
  print(e);
  print(f);
  print(g);
  print(h);
  print(list);

// If-else
  var age = 20;
  if (age > 18) {
    print('Adult');
  } else {
    print('Minor');
  }

// Switch case
  String day = "Monday";
  switch (day) {
    case 'Monday':
      print('Start of the week');
      break;
    default:
      print('Another day');
  }

// Loops
  for (var i = 0; i < 5; i++) {
    print(i);
  }

  var i = 0;
  while (i < 5) {
    // code
    i++;
  }

  do {
    // code
    i++;
  } while (i < 5);

// exception handling
  try {
    print(10 / 0);
  } catch (e) {
    print(e);
  }

// async and await
  Future fetchData() async {
//   Future<void> fetchData() async { // btw you can define a specific type using <> its like typescript
    // Simulate a network request
    await Future.delayed(Duration(seconds: 2));
    print('Data fetched');
  }

// Using async
  void main() async {
    print('Fetching data...');
    await fetchData();
    print('Done!');
  }
}

class Human {
  var name;

  Human(String name) {
    this.name = name; // you know 'this' keyword right?
  }

  void sayHello() {
    print('Hello, $name');
  }
}

class Person {
  String name;
  int age;

  Person(this.name, this.age);

  void greet() {
    print('Hello, my name is $name.');
  }
}

// Inheritance
class Student extends Person {
  String school;

  Student(String name, int age, this.school) : super(name, age);
}
