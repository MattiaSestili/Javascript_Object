var car = {    
    name: "Fiat",
    model: "500",
    color: "Red"
}

function Car(name,model,color)
{
    this.name = name;
    this.model = model;
    this.color = color;
}

var fiat500 = new Car("Fiat", "500", "White");

fiatOutput = fiat500.name + " " + fiat500.model + " " +fiat500.color;

document.getElementById("demo").innerHTML = fiatOutput;