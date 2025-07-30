public class DataTypes {
    public static void main(String[] args) {
        System.out.println("Hello world");
        int age = 10;
        System.out.println("Your age is " + age);

        // boolean values
        boolean v1 = true;

        // whole number without decimal
        int v2 = 12;
        byte v3 = 13;
        short v4 = 1233;
        long v5 = 8847389;

        // with decimal
        float v6 = 3.12f; // by default, it's double
        double v7 = 3.234554;

        // character
        char v8 = 'D'; // single quote is important

        System.out.println(v1); // btw println prints the value in a new line
        System.out.println(v2);
        System.out.println(v3);
        System.out.println(v4);
        System.out.println(v5);
        System.out.println(v6);
        System.out.println(v7);
        System.out.println(v8);

        // Typecasting

        // if you want to convert a big bucket value into small bucket (implicit conversion happens automatically)
        int a1 = 100294;
        long a2 = a1;
        System.out.println(a2);

        // if you want to convert a big bucket into small one (explicit conversion is required)
        long a3 = 12394;
        // int a4 = a3;
        int a4 = (int)a3; // this can cause data loss
        System.out.println(a4);

        int a5 = 12;
        int a6 = 7;
        int a7 = a5 / a6; // but it will give integer division result
        double a8 = (double)a5 / a6; // this will give a double division
        System.out.println("a7 is " + a7);
        System.out.println("a8 is " + a8);
    }
}