import random

rock = 'rock'

paper = 'paper'

scissors = 'scissors'

userChoice = int(input("1 for rock, 2 for paper, 3 for scissors\n"))

pcChoice = random.randint(1,3)

print("You choose: \n")
if userChoice == 1:
  print(rock)
elif userChoice == 2:
  print(paper)
elif userChoice == 3:
  print(scissors)

print("\nPC choice: \n")

if pcChoice == 1:
  print(rock)
elif pcChoice == 2:
  print(paper)
elif pcChoice == 3:
  print(scissors)

print("\n")

if userChoice == 1 and pcChoice == 1:
  print("DRAW")
elif userChoice == 2 and pcChoice == 2:
  print("DRAW")
elif userChoice == 3 and pcChoice == 3:
  print("DRAW")
elif userChoice == 1 and pcChoice == 2:
  print("You lose")
elif userChoice == 1 and pcChoice == 3:
  print("You win")
elif userChoice == 2 and pcChoice == 1:
  print("You win")
elif userChoice == 2 and pcChoice == 3:
  print("You lose")
elif userChoice == 3 and pcChoice == 1:
  print("You lose")
elif userChoice == 3 and pcChoice == 2:
  print("You win")