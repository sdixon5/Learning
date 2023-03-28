//Welcome to user app
Console.WriteLine("Welcome to the Greeting Application!");
Console.WriteLine();

//Ask for first name
Console.Write("What is your first name: ");
string? firstName = Console.ReadLine();

//greet user by name
Console.WriteLine();
Console.WriteLine($"Hello, {firstName}!");

Console.WriteLine("Thanks for using the application!");
Console.ReadLine();