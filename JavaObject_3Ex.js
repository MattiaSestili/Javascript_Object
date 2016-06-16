function Person (firstName, surname)
{
    this.fullName =
    {
        firstName: firstName,
        surname: surname
    }
}

var someone = new  Person("John", "Doe")

var name = someone.fullName.firstName + " " + someone.fullName.surname;

document.getElementById("demo").innerHTML = name;