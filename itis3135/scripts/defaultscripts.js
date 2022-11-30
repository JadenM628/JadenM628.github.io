var date = new Date();

function getTodaysDate()
{
    document.getElementById("date").innerHTML = "Today is " + date.toLocaleTimeString() + ", on " + date.toDateString();
}


function promptUser() {
    document.getElementById("response").innerHTML = "The Jolly Machine welcomes you, " + document.getElementById("name").value + "! We're glad you're feeling " + document.getElementById("feeling").value + "!";
}
