function alertUser()
{
    var num = prompt("The Jolly Machine would like you to enter a number ");
    validateEntry(num);
}
function validateEntry(num)
{
    if(isNaN(num))
    {
    alert("Invalid!!! Please Enter a Number.");
    alertUser();
    }
    else
    {
        number = Math.trunc(num);
        if(number > 11 || number < 1)
        {
            alert("Invalid Number!!! Please enter a number between 1 and 11.");
            alertUser();
        }
        else
        {
            getShape(number);
        }
    }
}
function getShape(sides)
{
    var polygonNames = new Array 
    (
        "Henagon", 
        "Digon", 
        "Trigon", 
        "Tetragon", 
        "Pentagon", 
        "Hexagon", 
        "Heptagon", 
        "Octagon", 
        "Enneagon", 
        "Decagon", 
        "Hendecagon"
    );
    var message = "A polygon with " + sides + " sides is called a " + polygonNames[sides - 1] + " . ";

    document.getElementById("polygonName").innerHTML = message;
}