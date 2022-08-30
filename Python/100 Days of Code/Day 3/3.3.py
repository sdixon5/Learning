# Day 3.3 Leap Year Exercise
# 2016 is a leap year

# 🚨 Don't change the code below 👇
year = int(input("Which year do you want to check? "))
# 🚨 Don't change the code above 👆
year = float(year)

if (
    (
      ((year / 4).is_integer()) and
      ((year / 100).is_integer()) and
      ((year / 400).is_integer())
    )
    or
    (
        ((year / 4).is_integer()) and
        (not (year / 100).is_integer())
    )
  ):
  print("Leap year.")
else:
  print("Not leap year.")
