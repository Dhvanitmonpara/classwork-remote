public class Methods {
    public static void main(String[] args) {
       int ans = average(5, 10);
       System.out.println("Your average is: " + ans);

       System.out.println("Java also supports Math library functions:");
       System.out.println("Square root of 25: " + Math.sqrt(25));
       System.out.println("This is a random number between 1 and 10: " + (int)(Math.random() * 10));

    }

    // static keyword is used to declare a method that belongs to a class and not an instance (object) of the class
    public static int average(int a, int b) {
        printHello();
        return (a + b) / 2;
    }

    static void printHello() {
        System.out.println("Hello");
    }

}
