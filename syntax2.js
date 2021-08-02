var firstNumber = document.getElementById("firstNumber");
var secondNumber = document.getElementById("secondNumber");
var answerElement = document.getElementById("answer");
/* 
var testName = "test";

var copyTestName = testName;

testName = "test2";

document.write(testName);
document.write("<br />");
document.write(copyTestName);


 */ function btnAddClicked() {
  /* 
        converting input values into numbers and adding them
    */
  var result = parseInt(firstNumber.value) + parseInt(secondNumber.value);
  // outputing the results into the h3
  answerElement.textContent = result;
}

// for loop
var number = document.getElementById("number");
var answer = document.getElementById("answer");

function addTo() {
  var inputValue = parseInt(number.value);
  var result = 0;
  var resultOutput = "";
  for (var i = inputValue; i >= 1; i--) {
    result = result + i;

    // outputing series
    resultOutput += i + "+";
  }
  //don't look at it!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  resultOutput = resultOutput.substring(0, resultOutput.length - 1) + "=";

  //setting h3's text content to be addition
  answer.textContent = resultOutput + result;
}
