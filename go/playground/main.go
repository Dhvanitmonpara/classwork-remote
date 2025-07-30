package main

import "fmt"

func main() {

	var nums []int

	nums = append(nums, 18)

	for i, val := range nums {
		fmt.Printf("Index: %d, Value: %d\n", i, val)
	}
	fmt.Println(nums == nil)

}
