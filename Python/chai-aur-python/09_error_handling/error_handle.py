file = open('youtube.txt', 'w')

try:
    file.write('chai aur code')
finally:
    file.close()

# better syntax for working with files
with open('youtube.txt', 'w') as file:
    file.write('chai aur python')