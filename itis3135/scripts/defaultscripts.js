var date = new Date();

window.onload = function() 
{
    document.getElementById("date").innerHTML = "Today is " + date.toLocaleTimeString() + " on " + date.toDateString();
}
