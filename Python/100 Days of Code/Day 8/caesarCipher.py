alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n").lower()
text = input("Type your message:\n").lower()
shift = int(input("Type the shift number:\n"))

def encrypt(text, shift):
  encrypted = ""
  for letter in text:
    index = alphabet.index(letter)
    newIndex = index + shift
    if newIndex > 26:
      encrypted += alphabet[(newIndex - 26)]
    else:
      encrypted += alphabet[newIndex]
  print(encrypted)

def decrypt(text, shift):
  decrypted = ""
  for letter in text:
    index = alphabet.index(letter)
    newIndex = index - shift
    if newIndex > 26:
      decrypted += alphabet[(newIndex - 26)]
    else:
      decrypted += alphabet[newIndex]
  print(decrypted)

if direction == 'encode':
  encrypt(text, shift)
elif direction == 'decode':
  decrypt(text, shift)
else:
  print("That is not an option.")