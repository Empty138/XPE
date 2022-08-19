function start() {
   var buttonCalculateIMC = document.querySelector('#button-calculate-imc')
   buttonCalculateIMC.addEventListener('click', handleButtonClick);

   var inputWeight = document.querySelector('#input-weight');
   var inputHeight = document.querySelector('#input-height');

   inputWeight.addEventListener('input', handleButtonClick);
   inputHeight.addEventListener('input', handleButtonClick);

    handleButtonClick();
}

function calculateIMC(weight, height) {
    return weight / (height*height);
}

function handleButtonClick() {
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result');

    var weigh = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    var imc = calculateIMC(weigh, height);
    var formattedImc = imc.toFixed(2).replace('.' , ',');

   imcResult.textContent = formattedImc;
}

start ();

