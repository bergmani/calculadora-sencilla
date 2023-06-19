/*
## Ejercicio 2. Calculadora sencilla de dos números.
Crea un programa utilizando HTML, CSS y JavaScript que solicite dos números al usuario y permita suma, restar, multiplicar o dividir dichos números y muestre el resultado.

Una vez que tengas diseñados los dos programas, alójalos de manera estática en GitHub Pages y comparte el enlace de dicha página.

**Fecha límite:** *18 de junio, 23:59 hrs.* 
*/

const firstNumber=document.getElementById('firstNumber');
const secondNumber=document.getElementById('secondNumber');

const add=document.getElementById('add');
const substract=document.getElementById('substract');
const multiplicate=document.getElementById('multiplicate');
const divide=document.getElementById('divide');

const finalResult=document.querySelector('.finalResult');

add.addEventListener('click',()=>{
	const num1 = parseFloat(firstNumber.value);
	const num2 = parseFloat(secondNumber.value);
	const result = num1 + num2;
	finalResult.textContent = `${num1} + ${num2} = ${result}`;
})

substract.addEventListener('click',()=>{
	const num1 = parseFloat(firstNumber.value);
	const num2 = parseFloat(secondNumber.value);
	const result = num1 - num2;
    finalResult.textContent = `${num1} - ${num2} = ${result}`;
})
multiplicate.addEventListener('click',()=>{
	const num1 = parseFloat(firstNumber.value);
	const num2 = parseFloat(secondNumber.value);
	const result = num1 * num2;
    finalResult.textContent = `${num1} x ${num2} = ${result}`;
})
divide.addEventListener('click',()=>{
	const num1 = parseFloat(firstNumber.value);
	const num2 = parseFloat(secondNumber.value);
	const result = num1 / num2;
    finalResult.textContent = `${num1} ÷ ${num2} = ${result}`;
})