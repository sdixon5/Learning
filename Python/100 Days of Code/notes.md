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
