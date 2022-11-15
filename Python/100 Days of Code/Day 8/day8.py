def greet(name, location):
  print(f"Hello {name}")
  print(f"What is it like in {location}?")

greet("Nowhere", "Bob") #positional arguments --> sentence won't make sense like this

greet(location="Nowhere", name="Bob") #keyword arguments --> sentence will make sense now

