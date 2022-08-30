#3.4 Pizza Order Exercise
# Instructions
# Congratulations, you've got a job at Python Pizza. Your first job is to build an automatic pizza order program.

# Based on a user's order, work out their final bill.

# Small Pizza: $15

# Medium Pizza: $20

# Large Pizza: $25

# Pepperoni for Small Pizza: +$2

# Pepperoni for Medium or Large Pizza: +$3

# Extra cheese for any size pizza: + $1

# 🚨 Don't change the code below 👇
print("Welcome to Python Pizza Deliveries!")
size = input("What size pizza do you want? S, M, or L ")
add_pepperoni = input("Do you want pepperoni? Y or N ")
extra_cheese = input("Do you want extra cheese? Y or N ")
# 🚨 Don't change the code above 👆

#Write your code below this line 👇
bill = 0

if size == "S":
  if add_pepperoni == "Y":
    bill += 17
  else:
    bill += 15
elif size == "M":
  if add_pepperoni == "Y":
    bill += 23
  else:
    bill += 20
else:
  if add_pepperoni == "Y":
    bill += 28
  else:
    bill += 25

if extra_cheese == "Y":
  bill += 1

print(f"Your final bill is: ${bill}.")