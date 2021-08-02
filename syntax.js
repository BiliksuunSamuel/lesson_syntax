var input = document.getElementById("heyWorld");
var paragraph = document.getElementById("helloWorld");

function btnyesClicked() {
  paragraph.textContent = input.value;
}

var input = document.getElementById("helloInput");
var h2 = document.getElementById("LoveyouDaddy");

function btnHelloClicked() {
  h2.textContent = input.value;
}

var firstNumber = document.getElementById("firstnumber");
var secondNumber = document.getElementById("secondnumber");
var h2 = answer.getElementById("Answer");
function btnaddClicked() {
  let number1 = firstNumber.value;
  number2 = secondNumber.value;
  answer.textContent = parseInt(number1) + parseInt(number2);
}
