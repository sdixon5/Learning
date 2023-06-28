string? firstName = null;
string? lastName = null;
int? age = null;
bool? isAlive = null;
string? phoneNumber = null;

Console.WriteLine("Tell me about yourself. \n\r");
Console.WriteLine("What is your first name? \n\r");
firstName = Console.ReadLine();
Console.WriteLine("What is your last name? \n\r");
lastName = Console.ReadLine();
Console.WriteLine("What is your age? \n\r");
age = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Are you alive? Y or N \n\r");
var res = Console.ReadLine();
if (res == "Y")
{
    isAlive = true;
}
else
{
    isAlive = false;
}
Console.WriteLine("What is your phone number? \n\r");
phoneNumber = Console.ReadLine();