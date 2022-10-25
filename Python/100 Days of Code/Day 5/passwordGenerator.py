import random
letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
numbers = ['0','1','2','3','4','5','6','7','8','9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

print("Welcome to the pypassword generator")

nr_letters = int(input("How many letter would you like?\n"))
nr_symbols = int(input("How many symbols?\n"))
nr_numbers = int(input("How many numbers?\n"))

chosenCharacters = []

for num in range(0, nr_letters, 1):
  chosenCharacters.append(random.choice(letters))

for num in range(0, nr_numbers):
  chosenCharacters.append(random.choice(numbers))

for num in range(0, nr_symbols, 1):
  chosenCharacters.append(random.choice(symbols))

password = ''

for num in range(0, len(chosenCharacters), 1):
  char = random.choice(chosenCharacters)
  password += char
  chosenCharacters.remove(char)

print (password)