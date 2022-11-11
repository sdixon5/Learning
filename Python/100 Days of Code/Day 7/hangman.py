import random

word_list = ["aardvark", "baboon", "camel"]

chosen_word = random.choice(word_list).lower()

display = []
wordLength = len(chosen_word)

for _ in range(wordLength):
  display.append("_")

print(display)

endOfGame = False

while not endOfGame: #easier to just do while "_" not in display
  guess = input("Guess a letter: ").lower()

  for position in range(wordLength):
    letter = chosen_word[position]
    if letter == guess:
      display[position] = letter

  print(display)

  if "_" not in display:
    endOfGame = True

print("You won")