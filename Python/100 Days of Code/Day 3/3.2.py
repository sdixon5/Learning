# Day 3.2 BMI 2.0 Exercise

# underweight
# normal weight
# overweight
# obese
# clinically obese
print("Your BMI is 40, you are clinically obese.")

# 🚨 Don't change the code below 👇
height = float(input("enter your height in m: "))
weight = float(input("enter your weight in kg: "))
# 🚨 Don't change the code above 👆

# Write your code below this line 👇

result = float(weight) / (float(height) * float(height))
result = round(result)

if result < 18.5:
    # print("Your BMI is " + str(int(result)) + ", you are underweight.")
    print(f"Your BMI is {result}, you are underweight.")
elif result < 25:
    print("Your BMI is " + str(int(result)) + ", you have a normal weight.")
elif result < 30:
    print("Your BMI is " + str(int(result)) + ", you are slightly overweight")
elif result < 35:
    print("Your BMI is " + str(int(result)) + ", you are obese.")
else:
    print("Your BMI is " + str(int(result)) + ", you are clinically obese.")
