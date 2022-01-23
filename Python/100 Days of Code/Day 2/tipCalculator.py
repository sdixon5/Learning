# If the bill was $150.00, split between 5 people, with 12% tip.
# Each person should pay (150.00 / 5) * 1.12
# Round the result to 2 decimal places = 33.60

# Example output
# Welcome to the tip calculator.
# What was the total bill? $124.56
# What perentage tip would you like to give? 10, 12, or 15? 12
# How many people to split the bill? 7
# Each person should pay: $19.93

print("Welcome to the tip calculator.")
total = input("What was the total bill? $")
percentage = input(
    "What percentage tip would you like to give? 10, 12, or 15? ")
people = input("How many people to split the bill? ")

if("$" in total):
    total = total[1:]

if("%" in percentage):
    percentage = percentage[0:-1]

#        (     124.56   /      5)     *  1                   .12
payout = (float(total) / int(people)) * (1 + (int(percentage)/100))

payout = "{:.2f}".format(payout)
print(f"Each person should pay: ${payout}")
