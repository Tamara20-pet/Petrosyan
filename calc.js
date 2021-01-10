const defaultResult = 0;
let currentResult = defaultResult;

function add() 
{
  const calcDescription = `${currentResult} + ${userInput.value}`;
  currentResult = currentResult + parseFloat(userInput.value);
  outputResult(currentResult, calcDescription);
}
addBtn.addEventListener("click", add);


function subtract() 
{
  const calcDescription = ` ${userInput.value} - ${currentResult}`;
  currentResult = parseFloat(userInput.value) - currentResult ;
  outputResult(currentResult, calcDescription);
}
subtractBtn.addEventListener("click", subtract);


let defRes = 1;
function mul()
 {
    const calcDescription = ` ${userInput.value} * ${defRes}`;
    defRes = parseFloat(userInput.value) * defRes ;
    outputResult(defRes, calcDescription);
  }
  multiplyBtn.addEventListener("click",mul);


  function div() 
  {
    const calcDescription = ` ${userInput.value} / ${defRes}`;
    defRes = parseFloat(userInput.value) /  defRes ;
    outputResult(userInput.value, calcDescription);
  }
  divideBtn.addEventListener("click", div);



