defining functions

```
def my_function():
  #do this
  #then this
  #finally this
```

calling function

```
my_function()
```

reeborg's world
https://reeborg.ca/reeborg.html?lang=en&mode=python&menu=worlds%2Fmenus%2Freeborg_intro_en.json&name=Alone&url=worlds%2Ftutorial_en%2Falone.json

jump hurdles

```
def turn_right():
    turn_left()
    turn_left()
    turn_left()

def jumpHurdle():
    if front_is_clear():
        move()
    elif wall_in_front():
        turn_left()
        move()
        turn_right()
        move()
        turn_right()
        move()
        turn_left()

#for num in range(0, 6):
 #   jumpHurdle()

while not at_goal():
    jumpHurdle()
```

her version of hurdles

```
def turn_right():
    turn_left()
    turn_left()
    turn_left()

def jump():
    turn_left()
    move()
    turn_right()
    move()
    turn_right()
    move()
    turn_left()

while not at_goal():
    if wall_in_front:
        jump()
    else:
        move()
```

variable wall height:

```
def turn_right():
    turn_left()
    turn_left()
    turn_left()

def jump():
    turn_left()
    count = 0
    while wall_on_right():
        move()
        count += 1
    turn_right()
    move()
    turn_right()
    for i in range(count):
        move()
    turn_left()

while not at_goal():
    if wall_in_front():
        jump()
    else:
        move()
```

her version

```
def turn_right():
    turn_left()
    turn_left()
    turn_left()

def jump():
    turn_left()
    count = 0
    while wall_on_right():
        move()
    turn_right()
    move()
    turn_right()
    while front_is_clear():
        move()
    turn_left()

while not at_goal():
    if wall_in_front():
        jump()
    else:
        move()
```

maze my version

```
def turn_right():
    turn_left()
    turn_left()
    turn_left()

def get_out():
    if right_is_clear():
        turn_right()
        move()
    elif right_is_clear() and not wall_on_right():
        move()
    elif wall_on_right() and front_is_clear():
        move()
    else:
        turn_left()

while not at_goal():
    get_out()
```

her version

```
def turn_right():
    turn_left()
    turn_left()
    turn_left()

while not at_goal():
    if right_is_clear():
        turn_right()
        move()
    elif front_is_clear():
        move()
    else:
        turn_left()
```

my maze version which beats the three additional challenges

```
def turn_right():
    turn_left()
    turn_left()
    turn_left()

def get_out():
    if front_is_clear() and right_is_clear():
        move()
    elif right_is_clear():
        turn_right()
        move()
    elif wall_on_right() and front_is_clear():
        move()
    else:
        turn_left()

while not at_goal():
    get_out()
```

her maze version to beat the 3 challenges

```
def turn_right():
    turn_left()
    turn_left()
    turn_left()

while front_is_clear():
    move()

turn_left()

while not at_goal():
    if right_is_clear():
        turn_right()
        move()
    elif front_is_clear():
        move()
    else:
        turn_left()
```

positional arguments vs keyword arguments

```
def greet(name, location):
  print(f"Hello {name}")
  print(f"What is it like in {location}?")

greet("Nowhere", "Bob") #positional arguments --> sentence won't make sense like this

greet(location="Nowhere", name="Bob") #keyword arguments --> sentence will make sense now
```

Dictionaries and Nesting
{Key: Value}

```
programming_dictionary = {
    "Bug": "An error in a program that prevents the program from running as expected.",
    "Function": "A piece of code that you can easily call over and over again.",
}

#Retrieving values
programming_dictionary["Bug"]

#Adding
programming_dictionary["Loop"] = "The action of doing something over and over again."

empty_dictionary = {}

#Wipe dictionary
programming_dictionary = {}

#edit an item
programming_dictionary["Bug"] = "This has been edited."

#Loop through a dictionary
for key in programming_dictionary:
    programming_dictionary[key]
```
