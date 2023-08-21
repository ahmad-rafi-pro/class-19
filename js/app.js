// program to check if the number is even or odd
const calculate = () => {
    // Getting input from user into height variable.
    let number = document.querySelector("#nmbr").value;
// Checking the values are empty if empty then
if (number == "") { document.querySelector("#showdata").innerHTML = "Please enter any number";
    } else {
       // Checking condition for Even and Odd
       if (number % 2 == 0) {
       document.querySelector(
          "#showdata"
       ).innerHTML =
          `The Number is Even`;
    } else {
        document.querySelector(
           "#showdata"
       ).innerHTML =
          ` The Number is Odd`;
    }
    }
}    