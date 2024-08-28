import java.util.Scanner;

public class StringObject {
    public static void main(String[] args) {

        System.out.println("\n");

        // Basics
        String str = "Hello World!";
        char strChar[] = {'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!'};
        for (char c : strChar) {
            System.out.print(c);
        }
        System.out.println('\n');

        // Advance
        System.out.println("Original String: " + str);
        str = str.replace("Hello", "Goodbye");
        System.out.println("Modified String: " + str);
        System.out.println("Length of the string: " + str.length());
        System.out.println("Substring: " + str.substring(6, 11));
        System.out.println("Uppercase: " + str.toUpperCase());
        System.out.println("Lowercase: " + str.toLowerCase());
        System.out.println("Is String empty? " + str.isEmpty());
        System.out.println("Contains 'World'? " + str.contains("World"));
        // String concatenation
        String str2 = "Java";
        System.out.println("Concatenated String: " + str + " " + str2);
        // String comparison
        String str3 = "Hello World!";
        System.out.println("Are the strings equal? " + str.equals(str3));
        System.out.println("Are the strings equal ignoring case? " + str.equalsIgnoreCase(str3));
        // Splitting a string
        String str4 = "Hello, World!";
        String[] words = str4.split(", ");
        for (String word : words) {
            System.out.println(word);
        }
        // Formatting a string
        String name = "John Doe";
        int age = 30;
        System.out.printf("My name is %s, and I am %d years old.%n", name, age);


        // heap vs stack memory usage
        // actual string vs reference
        String str1 = new String("Hello");
        // String str2 = new String("Hello"); // it'll throw an exception

        if (str1 == str2) {
            // it (==) checks reference whereas stringName.equals checks value
            // equalsIgnoreCase ignores cases anuj == Anuj
            System.out.println("Both strings are same");
        }
        // visit strings in java by anuj bhaiya for better explanation
        // concept of heap and stack memory in java
        // String interning for optimization in java
        String str5 = "Hello";
        String str6 = "Hello";
        if (str5 == str6) {
            System.out.println("Both strings are same");
        }
        // interning happens when you create a string using double quotes
        // and the JVM checks if the same string already exists in the string pool
        // if yes, it returns the reference else creates a new string in the pool
        // string pool is a part of JVM memory
        // it's an optimization technique to reduce memory usage
       
        combineName();

    }

    public static void combineName(){

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your first name: ");
       String firstName = sc.nextLine();

        System.out.print("Enter your last name: ");
        String lastName = sc.nextLine();

        System.out.println("Your name is " + firstName + " " + lastName);

        sc.close();
    }
}
