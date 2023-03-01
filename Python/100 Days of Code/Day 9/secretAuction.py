import os

bids = {}

def clear():
  os.system('cls' if os.name == 'nt' else 'clear')

def gatherPlayers():
  name = input("What is your name? ")
  total = int(input("What is your bid? $"))

  bids[name] = total

  anotherPlayer = input("Are there anymore players? 'Yes' or 'No'").lower()

  if (anotherPlayer == "yes"):
    clear()
    gatherPlayers()

def determineWinner():
  highestBidTotal = 0
  highestBidPlayer = ""

  for player in bids:
    if(int(bids[player]) > int(highestBidTotal)):
      highestBidTotal = bids[player]
      highestBidPlayer = player

  print(f"The winner is {highestBidPlayer} with a bid of ${highestBidTotal}!")

clear()
gatherPlayers()
clear()
determineWinner()