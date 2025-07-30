package OOP;

public class Abstraction {
    public static void main(String[] args) {
        // Vehicle v = new Vehicle(); // cannot create an object of an abstract class
        Car v = new Car();
        v.start();
        v.stop();
    }
}

abstract class Vehicle {
    public abstract void start();

    public abstract void stop();

    public void display() {
        System.out.println("This is a vehicle");
    }
}

class Car extends Vehicle {

    @Override
    public void start() {
        System.out.println("Car started");
    }

    @Override
    public void stop() {
        System.out.println("Car stopped");
    }
}

class Bike extends Vehicle {

    @Override
    public void start() {
        System.out.println("Bike started");
    }

    @Override
    public void stop() {
        System.out.println("Bike stopped");
    }

    public class InnerAbstraction {
        void printSomething() {
            System.out.println("Hello");
        }
    }
}

// - you can also create interface as an abstract class
// - interface is similar to abstract class except that it cannot have any
// - abstract methods
// - you can inherit more than one interface into a single class
// - note than interface uses 'implement' keyword instead of 'extends'
// - you can create default implementation for an interface by using 'default' keyword