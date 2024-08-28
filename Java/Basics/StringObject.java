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
    }
}
