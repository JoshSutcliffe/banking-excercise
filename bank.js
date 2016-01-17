console.log("maps");

// checking accounts adding buttons and input box to variables
var everydayInput = document.getElementById("everyday"); // everyday account input box
var everydayAddFunds = document.getElementById("add-everyday"); // add everday button
var everydayWithdrawFunds = document.getElementById("withdraw-everyday"); // withdraw everday button

var everydayBalance = 0;

var savingsInput = document.getElementById("savings"); // savings account input box
var savingsAddFunds = document.getElementById("add-savings"); // add savings button
var savingsWithdrawFunds = document.getElementById("withdraw-savings"); // withdraw savings button

var savingsBalance = 0;

var sumDifference = 0;

document.getElementById("everyday-balance").innerHTML = ("$" + everydayBalance);
document.getElementById("savings-balance").innerHTML = ("$" + savingsBalance);

var addEverday = function() {
  if (everydayBalance >= 0) {
    everydayBalance = everydayBalance + parseFloat(everydayInput.value);
      console.log(everydayBalance);
    document.getElementById("everyday-balance").innerHTML = ("$" + everydayBalance);
  }
}

everydayAddFunds.addEventListener("click", addEverday);

var withdrawEveryday = function () {

  var withdrawalAmt = parseFloat(everydayInput.value);
  if (withdrawalAmt < everydayBalance) {
      everydayBalance = everydayBalance - withdrawalAmt;
  } else if (withdrawalAmt === everydayBalance) {
      everydayBalance = everydayBalance - withdrawalAmt;
  } else if (withdrawalAmt > everydayBalance) {
    everdayToSavingsWithdrawals()
    }
    document.getElementById("everyday-balance").innerHTML = ("$" + everydayBalance);
    document.getElementById("savings-balance").innerHTML = ("$" + savingsBalance);
}

var everdayToSavingsWithdrawals = function() {
  var withdrawalAmt = parseFloat(everydayInput.value);
  if (withdrawalAmt > everydayBalance) {
      sumDifference = Math.abs(everydayBalance - withdrawalAmt);
      everydayBalance = 0;
    } if (sumDifference < savingsBalance) {
        savingsBalance = savingsBalance - sumDifference;
      } else if (sumDifference >= savingsBalance) {
        savingsBalance = 0;
  }
  document.getElementById("everyday-balance").innerHTML = ("$" + everydayBalance);
  document.getElementById("savings-balance").innerHTML = ("$" + savingsBalance);
}

everydayWithdrawFunds.addEventListener("click", withdrawEveryday);

var addSavings = function() {
  if (savingsBalance >= 0) {
    savingsBalance = savingsBalance + parseFloat(savingsInput.value);
      // console.log(savingsBalance);
    document.getElementById("savings-balance").innerHTML = ("$" + savingsBalance);
  }
}

savingsAddFunds.addEventListener("click", addSavings);

var withdrawSavings = function () {

  var withdrawalAmt = parseFloat(savingsInput.value);
  if (withdrawalAmt < savingsBalance) {
      savingsBalance = savingsBalance - withdrawalAmt;
  } else if (withdrawalAmt === savingsBalance) {
      savingsBalance = savingsBalance - withdrawalAmt;
  } else if (withdrawalAmt > savingsBalance) {
    savingsToEverydayWithdrawals()
    }
    document.getElementById("everyday-balance").innerHTML = ("$" + everydayBalance);
    document.getElementById("savings-balance").innerHTML = ("$" + savingsBalance);
}

var savingsToEverydayWithdrawals = function() {
  var withdrawalAmt = parseFloat(savingsInput.value);
  if (withdrawalAmt > savingsBalance) {
      sumDifference = Math.abs(savingsBalance - withdrawalAmt);
      savingsBalance = 0;
    } if (sumDifference < everydayBalance) {
        everydayBalance = everydayBalance - sumDifference;
      } else if (sumDifference >= everydayBalance) {
        everydayBalance = 0;
  }
  document.getElementById("everyday-balance").innerHTML = ("$" + everydayBalance);
  document.getElementById("savings-balance").innerHTML = ("$" + savingsBalance);
}

savingsWithdrawFunds.addEventListener("click", withdrawSavings);








