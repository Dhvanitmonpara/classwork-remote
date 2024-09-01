package OOP;

public class Inheritance {
    public static void main(String[] args) {
        Calculator c1 = new Calculator();
        System.out.println(c1.add(5, 3));
        System.out.println(c1.subtract(5, 3));
        System.out.println(c1.multiply(5, 5));
        System.out.println(c1.divide(40, 5));
    }
}

class Calc {
    int x, y;
    public int add(int a, int b) {
        return a + b;
    }
    public int subtract(int a, int b) {
        return a - b;
    }
}

class Calculator extends Calc {
    public int multiply(int a, int b) {
        return a * b;
    }
    public double divide(int a, int b) {
        return a / b;
    }
}

// visit to video for super keyword (java inheritance by anuj bhaiya)
