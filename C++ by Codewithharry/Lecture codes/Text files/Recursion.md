# Definition

Recursion is a programming concept where a function calls itself directly or indirectly to solve a problem. It is a powerful and elegant technique used in many algorithms and can simplify complex problems.
Key Components

1. Base Case

    The base case is the condition that stops the recursion. It defines the simplest version of the problem that can be solved directly without further recursion.

2. Recursive Case

    The recursive case represents the part of the problem that is broken down into smaller subproblems. The function calls itself to solve these subproblems.

#### Factorial Calculation

```cpp
int factorial(int n) {

    // Base case
    if (n == 0 || n == 1) {

        return 1;

    } else {

        // Recursive case
        return n * factorial(n - 1);
    }
}
```

Breakdown of above code for `factorial(4)`

```cpp
factorial(4) = 4 * factorial(3); 
factorial(4) = 4 * 3 * factorial(2);
factorial(4) = 4 * 3 * 2 * factorial(1);
factorial(4) = 4 * 3 * 2 * 1;
factorial(4) = 24;
```

#### Fibonacci calculation

```cpp
int fibonacci(int n) {

    // Base cases
    if (n == 0) return 0;
    if (n == 1) return 1;

    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

Breakdown of above code for `fib(5)`

```cpp
fib(5)
fib(4) + fib(3)
fib(3) + fib(2) + fib(2) + fib(1)
// stop here if you don't want to be confused.
fib(2) + fib(1) + fib(1) + fib(0) + fib(1) + fib(0) + fib(0)
fib(1) + fib(0) + fib(0)
```