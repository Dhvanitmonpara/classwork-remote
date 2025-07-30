print("Hello, there! Welcome to ScoreBoard!\nType \"help\" for all commands :)")

# Initialize variables
cmd = ""
players = {}
inc = 1  # Default increment for score addition
dec = 1  # Default decrement for score subtraction

def show_help():
    print("\nCommands:")
    print("player [name]   Add or Remove a player")
    print("player          Add or Remove a player")
    print("inc [val]       Define increment with value (How many points to add)")
    print("dec [val]       Define decrement with value (How many points to subtract)")
    print("inc             Define increment (How many points to add)")
    print("dec             Define decrement (How many points to subtract)")
    print("add             Add points to a player's score")
    print("sub             Subtract points from a player's score")
    print("score           Show all scores along with players")
    print("exit            Exit the program\n")

def toggle_player(name):
    if name in players:
        del players[name]
        print(f"Player {name} removed.")
    else:
        players[name] = 0
        print(f"Player {name} added with an initial score of 0.")

def update_score(name, points):
    if name in players:
        players[name] += points
        print(f"{name}'s score updated to {players[name]}.")
    else:
        print(f"Player {name} not found!")

def show_scores():
    if players:
        print("\nScores:")
        for player, score in players.items():
            print(f"{player}: {score} points")
    else:
        print("\nNo players added yet!")

while cmd != "exit":
    cmd = input("scoreboard~$ ").strip().lower()
    
    if cmd == "help":
        show_help()
    
    elif cmd == "player":
        name = input("Enter player name: ").strip()
        toggle_player(name)
        
    elif cmd.split(" ")[0].strip() == "player":
        name = cmd.split(" ")[1].strip()
        toggle_player(name)
    
    elif cmd == "inc":
        try:
            inc = int(input("Enter increment value: "))
            print(f"Increment value set to {inc}.")
        except ValueError:
            print("Please enter a valid number.")
    
    elif cmd.split(" ")[0].strip() == "inc":
        try:
            inc = int(cmd.split(" ")[1])
            print(f"Increment value set to {inc}.")
        except ValueError:
            print("Please enter a valid number.")
    
    elif cmd == "dec":
        try:
            dec = int(input("Enter decrement value: "))
            print(f"Decrement value set to {dec}.")
        except ValueError:
            print("Please enter a valid number.")
            
    elif cmd.split(" ")[0].strip() == "dec":
        try:
            dec = int(cmd.split(" ")[1])
            print(f"Decrement value set to {dec}.")
        except ValueError:
            print("Please enter a valid number.")
    
    elif cmd == "add":
        name = input("Enter player name to add points: ").strip()
        update_score(name, inc)
        
    elif cmd.split(" ")[0].strip() == "add":
        name = cmd.split(" ")[1].strip()
        update_score(name, inc)
    
    elif cmd == "sub":
        name = input("Enter player name to subtract points: ").strip()
        update_score(name, -dec)
        
    elif cmd.split(" ")[0].strip() == "sub":
        name = cmd.split(" ")[1].strip()
        update_score(name, -dec)
    
    elif cmd == "score":
        show_scores()

    elif cmd == "exit":
        print("Exiting the scoreboard. Goodbye!")
    
    else:
        print("Invalid command. Type \"help\" for all commands.")
