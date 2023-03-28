//camelCase
//PascalCase
//strHungarianNotation was pushed by microsoft at one point in time. It tells you the type before the variable name.

string firstName = string.Empty;
string lastName = string.Empty;
string filePath = string.Empty;

firstName = "Tim";
lastName = "Corey";

// \ is an escape character, you need two \\ inside of a file path
filePath = "C:\\Temp\\Demo";

//the @ makes it so that everything in the string is a literal string aka @ makes the string a string literal
filePath = @"C:\Temp\Demo";

//you can mix and match, the order of $@ no longer matters, though it used to
string testString = $@"The file for {firstName} is at C:\SampleFiles";

//firstName = "123";

//" " is a string literal in the cw below
//Console.WriteLine(firstName + " " + lastName);

//String interpolation
Console.WriteLine($"{firstName} {lastName}");

Console.WriteLine(filePath);

//strings are expensive on the 10,000+ scale. At smaller scales they are fine.