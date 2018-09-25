document.write('<h1>Hola Hola</></br>');

//tipos de datos
var string = "\n esto es un string " + ' esto es otro string';
console.log(string);
//numero
var numerico = 12;
document.write(numerico+"</br>");

//objeto
var objeto = {
    "nombre": 'Elias' , 
    "edad": 26
};

console.log(objeto);
//crear variable
let otraVariable = 'otra forma de crear variable';
document.write("</br>"+otraVariable);

// variables constantes que no se puede cambiar el valor
const PI = 3.1415;

// suma
let valor1 = 10;
let valor2 = 20;
console.log(valor1+valor2);

// resta
console.log(valor1-valor2);

// divicion
console.log(valor1/valor2);

// multiplicacion
console.log(valor1*valor2);

//Igualdar
console.log('Igualdar de valor 10==10   :' +10=='10' );
console.log('igualdar de valor y tipo 10===10   :'+ 10 === '10');

//condicionales
if(valor1==valor2){

}else {

}

for(x=0; x<20;x++){

}
var count = 0;
while(count <20){
    count ++;
}

do{
    count --;
}while(count >0);

//Funciones

function funciones(){

};
funciones();