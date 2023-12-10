//Seleção de elementos:
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTable = document.querySelector("#multiplication-operations");

const multiplicationTitle = document.querySelector("#multiplication-title span");

//Funções:

const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for(i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        const template = `<div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result}</div>
        </div>`;

        const parser = new DOMParser(); //ele quem permite trazer os dados nas templates para html

        const htmlTemplate = parser.parseFromString(template, "text/html"); 

        const row = htmlTemplate.querySelector(".row");
    
        multiplicationTable.appendChild(row);
       }

       multiplicationTitle.innerText = number;

} //quando essa função é chamada, ela limpa o texto, já que adicionou uma string vazia ao html.

//Eventos:

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value; //tornando os valores em variáveis

    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return; 
    //nessa validação permite que só imprima códigos apenas quando há os dois números preenchidos.
    
    createTable(multiplicationNumber, multiplicatorNumber);
})