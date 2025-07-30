import tkinter as tk
from PIL import ImageTk

# Initialize the project
root = tk.Tk()
root.title("Recipe Picker")
root.eval("tk::PlaceWindow . center")

frame1 = tk.Frame(root, width=500, height=600, bg="#3d6466")
frame1.grid(row=0, column=0)

ImageTk.PhotoImage(file="assets/")

# Run app
root.mainloop()