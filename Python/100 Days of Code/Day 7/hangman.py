import random
import os

clear = lambda: os.system('cls')
#import hangman_words
#import hangman_art

from hangman_words import word_list
#hangman_words.word_list

play_again = True
end_of_game = False
lives = 6

while play_again and not end_of_game:
    chosen_word = random.choice(word_list)
    word_length = len(chosen_word)

    from hangman_art import logo, stages
    print(logo)

    #Testing code
    #print(f'Pssst, the solution is {chosen_word}.')

    #Create blanks
    display = []
    for _ in range(word_length):
        display += "_"

    while not end_of_game:
        guess = input("Guess a letter: ").lower()

        clear()

        if guess in display:
            print(f"You have already guessed the letter {guess}.")
        
        #Check guessed letter
        for position in range(word_length):
            letter = chosen_word[position]
            #print(f"Current position: {position}\n Current letter: {letter}\n Guessed letter: {guess}")
            if letter == guess:
                display[position] = letter

        #Check if user is wrong.
        if guess not in chosen_word:
            print(f"The letter {guess} is not in the word.")
            lives -= 1
            if lives == 0:
                end_of_game = True
                print("You lose.")

        #Join all the elements in the list and turn it into a String.
        print(f"{' '.join(display)}")

        #Check if user has got all letters.
        if "_" not in display:
            end_of_game = True
            print("You win.")

        print(stages[lives])

    if end_of_game:
        again = input("Do you want to play again 'Y' or 'N'\n").lower()

        if again == 'y':
            play_again = True
            end_of_game = False
            lives = 6
            clear()
        else:
            clear()
            print("Thanks for playing!")