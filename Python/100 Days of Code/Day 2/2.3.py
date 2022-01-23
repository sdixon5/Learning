# Day 2.3 Life in Weeks
# f-strings
# print(f"your score is {score}")

# 🚨 Don't change the code below 👇
age = input("What is your current age?")
# 🚨 Don't change the code above 👆

# Write your code below this line 👇
days = 365
weeks = 52
months = 12
maxYears = 90

yearsLeft = maxYears - int(age)


print(
    f"You have {yearsLeft*days} days, {yearsLeft*weeks} weeks, and {yearsLeft*months} months left.")
