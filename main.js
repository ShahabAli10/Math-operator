var input = prompt("Enter first number");
var input1 = prompt("Enter second number");
var input2 = prompt("Select any operator (+, -, *, /,)");
if (input2 == "+"){
    document.write (parseFloat(input) + parseFloat(input1));
}
else if (input2 === "-"){
    document.write(parseFloat(input) - parseFloat(input1));
}
else if ( input2 === "*"){
    document.write( parseFloat(input) * parseFloat(input1));
}
else if ( input2 === "/"){
    document.write(parseFloat(input) / parseFloat(input1));
}