window.onload = function() {
    document.getElementById("add_salary").onclick = addSalary;
    document.getElementById("display_results").onclick = displayResults;
    document.getElementById("display_salary").onclick = displaySalary;
    document.getElementById("employee").focus();
};

var employee = [];
var salary = [];

function addSalary() {

    var salaryInput = parseFloat(document.getElementById("salary").value);
    var nameInput = document.getElementById("employee").value;

    if(salaryInput === "")
    {
        alret("Please Enter a Number for the Salary!")
        salaryInput = "";
        document.getElementById("employee").focus();
    }
    else {

        salaryInput = parseFloat(salaryInput);
        employee.push(nameInput);
        salary.push(salaryInput);
        document.getElementById("salary").value = "";
        document.getElementById("employee").focus();
    }
}

function displayResults() {
    var average = 0;
    var sum = 0;
    var highestSalary = "";
    var maxNum = 0;

    for(i = 0; i < salary.length; i++) {
        sum += salary[i];
    }
    average = (sum/salary.length);

    for(i = 0; i < salary.length; i++) {
        if(salary[i] > maxNum) {
            maxNum = salary[i];
            highestSalary = employee[i];
        }
    }

    document.getElementById("results").innerHTML = "The average salary is $:" + average.toFixed(2) + " and the highest salary is " + highestSalary + "'s, at $:" + maxNum.toFixed(2);

}

function displaySalary() {
    var table;
    table = "<table><tr><th>Employee</th><th>Salary</th></tr>"

    for (i = 0; i < salary.length; i++) {
        table += "<tr><td>" + employee[i] + "</td><td>" + salary[i] + "</td></tr>";
    }
    table += '</table>';
    document.getElementById("results_table").innerHTML = table;
}