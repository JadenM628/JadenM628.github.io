$(document).ready(function() 
{
    $("#button1").click(function(){
        $("#div1").load("scripts/files/part1.txt");
    });
    $("#button2").click(function(){
        $("#div2").load("scripts/files/part2.txt");
    });
    $("#button3").click(function(){
        $("#div3").load("scripts/files/part3.txt");
    });
});
