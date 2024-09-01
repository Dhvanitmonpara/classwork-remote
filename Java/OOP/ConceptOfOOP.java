package OOP;

public class ConceptOfOOP {
    public static void main(String[] args) {
        Dog d1 = new Dog(14, "Tommy");
        d1.bark();
        d1.name = "Leo";
        d1.sleep();
        d1.printDogName();
    }
}

class Dog {
    int age;
    String name;
    
    Dog(int age, String name) {
        this.age = age;
        this.name = name;
    }

    void bark() {
        System.out.println(name + " is barking.");
    }

    void sleep() {
        System.out.println(name + " is sleeping.");
    }

    void printDogName() {
        // usage of "this" keyword
        // As you know "this" keyword always points to an object 
        // this -> object
        String name = this.name + " bruhh";
        System.out.println(name);
    }
}