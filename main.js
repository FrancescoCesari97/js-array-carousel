const userNameinput = document.getElementById('user-name')
const GenderInput = document.getElementById('user-gender')
const printButton = document.getElementById('print-button')
const resultElement = document.getElementById('result-element')

// sulla pagina html, al click di un bottone, deve apparire ciao nome,
//il colore del nome deve essere azzurro se maschio e rosa se femmina 

printButton.addEventListener('click', function(){

  const username = userNameinput.value;

  const gender = GenderInput.value;

  resultElement.innerText = `ciao  ${username}`;


  if(gender == "Maschile"){
    resultElement.style.color = "skyblue"

  } else if (gender == "Femminile") {
    resultElement.style.color = "pink"

  } else{
    resultElement.style.color = "goldenrod"
  }
})