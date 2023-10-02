const formulario = document.querySelector ('#formulario');
const input1 = document.querySelector ('#input1');
const input2 = document.querySelector ('#input2');
const btn = document.querySelector ('#btnCalcular');
const pResult = document.querySelector ('#result');

btn.addEventListener ('click', btnCalcular);

function btnCalcular(event) {
    event.preventDefault();
    const sumaInput = input1.value + input2.value;
    pResult.innerText =  "Resultado: " + sumaInput;

}