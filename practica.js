let prueba = [1, 2, 3, 4, 5];

let prueba2 = prueba.slice(2, 4)

console.log(prueba);
console.log(prueba2);

console.log(['a', 'b', 'c'].slice(1));

let objeto1 = {
    nombre: 'Red',
    edad: 41,
    estudia: ['Programación', 'Salsa', 'Inglés']
}

function desglesarValores(objeto1) {
    const arr = Object.values(objeto1)
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]); 
    }
}

desglesarValores(objeto1);

//******************************************

const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año', 
    expertDuo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
};

console.log(tiposDeSuscripciones.free);
console.log(tiposDeSuscripciones['free']);

const ejemploDeSuscripcion = 'free';
console.log(tiposDeSuscripciones[ejemploDeSuscripcion]);

//*******************************/

function conseguirTipoDeSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }   
    console.warn('ese tipo de suscripción no existe');
};

conseguirTipoDeSuscripcion('free');
conseguirTipoDeSuscripcion('expertDuo');
conseguirTipoDeSuscripcion('lallalala');

/*

console.log('Hello World');

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input')

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML = 'Red Robles <br> Tu eres el hombre';
h1.innerText = 'Sigue construyéndote sin parar <br> eres un hombre de ciencia!';

//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde')

// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = '456';

// Para crear un elemento desde cero

const img = document.createElement('img');
img.setAttribute('src', './logo_black@2x.webp');
console.log(img);

pid.innerHTML = ""
pid.append(img)

*/

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');

btn.addEventListener('click', sumarinputsValues);

function sumarinputsValues(){
    const sumar = parseInt(input1.value)  + parseInt(input2.value);
    resultado.innerHTML = 'Resultado: ' + sumar;
};