import time

wait_time = 1
max_retries = 5
attempts = 0
correct_pass = "123"

while attempts < max_retries:
    print(f"Attempt {attempts + 1}")
    user_pass = input("Enter the password: ")
    if user_pass == correct_pass:
        print("Access granted")
        break
    print(f"Access denied, wait for {wait_time} seconds")
    time.sleep(wait_time)
    wait_time *= 2
    attempts += 1