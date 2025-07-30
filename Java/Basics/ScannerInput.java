import java.util.Scanner;

public class ScannerInput {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your age: ");
        int age = sc.nextInt();
        System.out.println("Your age is: " + age);

        if (age >= 18) {
            System.out.println("You are an adult.");
        } else if (age >= 1 && age < 18) {
            System.out.println("You are a child.");
        } else {
            System.out.println("Invalid age entered. Please enter a positive integer between 1 and 120.");
        }

        // same thing but with ternary operator

        System.out.println(age > 18 ? "You are an adult." : "You are a child.");

        // switch statement

        System.out.println("Enter a number between 1 and 7 (inclusive): ");

        int number = sc.nextInt();
        switch (number) {
            case 1:
                System.out.println("Monday");
                break; // break statement is mandatory for each case
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
                System.out.println("Saturday");
                break;
            case 7:
                System.out.println("Sunday");
                break;
            default:
                System.out.println("Invalid number entered. Please enter a number between 1 and 7.");
        }

        // loops are in all programming languages, but here are some examples
        // for loop
        for (int i = 0; i < 10; i++) {
            System.out.println(i);
        }

        // while loop
        int j = 0;
        while (j < 10) {
            System.out.println(j);
            j++;
        }

        // do-while loop
        int k = 0;
        do {
            System.out.println(k);
            k++;
        } while (k < 10);

        // nested loops
        for (int l = 0; l < 5; l++) {
            for (int m = 0; m < 5; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }

        // continue statement
        for (int n = 0; n < 10; n++) {
            if (n % 2 == 0) {
                continue; // skips the current iteration
            }
            System.out.println(n);
        }

        // break statement
        for (int o = 0; o < 10; o++) {
            if (o == 5) {
                break; // exits the loop
            }
            System.out.println(o);
        }

        // labelled break statement
        outerLoop:
        for (int p = 0; p < 5; p++) {
            for (int q = 0; q < 5; q++) {
                if (q == 2) {
                    break outerLoop; // exits the outer loop
                }
                System.out.print("* ");
            }
            System.out.println();
        }
        
        // labelled continue statement
        outerLoop:
        for (int r = 0; r < 5; r++) {
            for (int s = 0; s < 5; s++) {
                if (s == 2) {
                    continue outerLoop; // skips the current iteration of the inner loop
                }
                System.out.print("* ");
            }
            System.out.println();
        }

        sc.close();
    }
}
