var car = {    
    name: "Fiat",
    model: "500",
    color: "Red"
}

function Car(name,model,color,start)
{
    this.name = name;
    this.model = model;
    this.color = color;
    this.start = function()
    {
        return "The engine is started ";
    }
    
}


var fiat500 = new Car("Fiat", "500", "White");

var startCar = fiat500.start();

document.getElementById("demo").innerHTML = startCar;