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
    var imcMsg = document.querySelector('#imc-result-v2');

    var weigh = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    var imc = calculateIMC(weigh, height);
    var formattedImc = imc.toFixed(2).replace('.' , ',');

   imcResult.textContent = formattedImc;
   imcMsg.textContent = mensagemImc(imc);
}

function mensagemImc(imc) {

    var mensagem = '';
    console.log(imc);

    if (imc >= 16 && imc < 16.9) {
    mensagem = 'Muito abaixo do peso.';
    }else if (imc >= 17 && imc < 18.4) {
    mensagem = 'Abaixo do peso.';
    }else if (imc >= 18.5 && imc < 25){
    mensagem = 'Peso Normal.';
    }else if (imc > 25 && imc < 30){
    mensagem = 'Acima do peso.';
    }else if (imc >= 30 && imc < 35){
    mensagem = 'Obsedidade grau I.';
    }else if (imc >= 35 && imc < 40){
    mensagem = 'Obsedidade grau II.';
    }else if (imc > 40){
    mensagem = 'Obsedidade grau III.';
    } else 
    mensagem = 'Valor inválido'
    
    return mensagem;
}


start ();
