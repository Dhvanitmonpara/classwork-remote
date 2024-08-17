public class Array {
    public static void main(String[] args) {

        int numbers[] = { 1, 2, 3, 4, 5 };

        System.out.println(numbers); // prints memory address of the array (this is not javascript bruhh)
        System.out.println(numbers.length); // prints 5);
        System.out.println(numbers[0]); // prints 1

        for (int i : numbers) {
            System.out.println("Number: " + i);
        }

        int age[]; // declaring an array
        age = new int[5]; // initializing an array with 5 elements
        age[0] = 25; // assigning values to the array
        age[1] = 30;
        System.out.println(age[0]); // prints 25

        String names[] = {"John", "Jane", "Bob"};
        System.out.println(names[1]); // prints Jane

        // find the smallest number in the array
        int randomNumbers[] = {5, 9, 76, 7, 23, 4, 11, 90, 2, 432, 78, 3};
        int min = Integer.MAX_VALUE;
        System.out.println(min);
        for (int i : randomNumbers) {
            if(i < min) {
                min = i;
            }
        }
        System.out.println("Smallest number in the array: " + min);

        // 2D array
        int[][] matrix = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };
        System.out.println(matrix[0][0]); // prints 1
        System.out.println(matrix[1][1]); // prints 5
        System.out.println(matrix.length); // prints 3
        System.out.println("2D array dimensions: " + matrix.length + " x " + matrix[0].length);
 
    }
}
