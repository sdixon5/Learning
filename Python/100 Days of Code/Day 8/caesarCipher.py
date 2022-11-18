#from art import logo
#print(logo)

alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

def caesar(text, shift, direction):
  outputText = ""
  if direction == "decode":
    shift *= -1
  for char in text:
    if char in alphabet:
      index = alphabet.index(char)
      newIndex = index + shift
      if newIndex > len(alphabet):
        outputText += alphabet[(newIndex - len(alphabet))]
      else:
        outputText += alphabet[newIndex]
    else: 
      outputText += char
  print(f"The {direction}d text is {outputText}.")

# def encrypt(text, shift):
#   encrypted = ""
#   for letter in text:
#     index = alphabet.index(letter)
#     newIndex = index + shift
#     if newIndex > len(alphabet):
#       encrypted += alphabet[(newIndex - len(alphabet))]
#     else:
#       encrypted += alphabet[newIndex]
#   print(f"The encrypted text is: {encrypted}")

#her version
#to fix the out of range issue, she re-added the letters of the alphabet to the array, so the letters repeat
# def encrypt(text, shift):
#   cipher_text = ""
#   for letter in text:
#     position = alphabet.index(letter)
#     new_position = position + shift
#     new_letter = alphabet[new_position]
#     cipher_text += new_letter
#   print(cipher_text)

# def decrypt(text, shift):
#   plain_text = ""
#   for letter in text:
#     position = alphabet.index(letter)
#     new_position = position - shift
#     plain_text += alphabet[new_position]
#   print(cipher_text)

# def decrypt(text, shift):
#   decrypted = ""
#   for letter in text:
#     index = alphabet.index(letter)
#     newIndex = index - shift
#     if newIndex > len(alphabet):
#       decrypted += alphabet[(newIndex - len(alphabet))]
#     else:
#       decrypted += alphabet[newIndex]
#   print(f"The decrypted text is: {decrypted}")

# if direction == 'encode':
#   encrypt(text, shift)
# elif direction == 'decode':
#   decrypt(text, shift)
# else:
#   print("That is not an option.")

should_continue = True

while should_continue:

  direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n").lower()

  text = input("Type your message:\n").lower()
  shift = int(input("Type the shift number:\n"))

  shift = shift % 26

  caesar(text, shift, direction)

  result = input("Type 'yes' if you want to go again. Otherwise type 'no'.\n").lower()
  if result == "no":
    should_continue = False
    print("Goodbye")