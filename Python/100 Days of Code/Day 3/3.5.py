#Day 3

# 🚨 Don't change the code below 👇
print("Welcome to the Love Calculator!")
name1 = input("What is your name? \n")
name2 = input("What is their name? \n")
# 🚨 Don't change the code above 👆

#Write your code below this line 👇
names = name1 + " " + name2

names = names.lower();

trueCount = sum(map(names.count, ['t','r','u','e']))
loveCount = sum(map(names.count, ['l','o','v','e']))

score = str(trueCount) + str(loveCount)

if int(score) < 10 or int(score) > 90:
  print(f"Your score is {score}, you go together like coke and mentos.")
elif int(score) >= 40 and int(score) <= 50:
  print(f"Your score is {score}, you are alright together.")
else:
  print(f"Your score is {score}.")



