//Calculando el perímetro y el area de un cuadrado 
console.group("Cuadrados");
// const ladoCuadrado = 5; 
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

//Perimetro del cuadrado 
function perimetroCuadrado(lado) {
    return lado * 4; 
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

//Area del cuadrado 
// const areaCuadrado = ladoCuadrado * ladoCuadrado; 
function areaCuadrado(lado) {
    return lado * lado; 
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();


//Calculando el perímetro y el area de un triángulo

// console.group("Triángulos")
// const ladoTrianguloUno = 10;
// const ladoTrianguloDos = 10; 
// const baseTriangulo = 5;

// console.log(
//     "los lados del triángulo miden:" 
//     + ladoTrianguloUno 
//     + "cm, " 
//     + ladoTrianguloDos 
//     + "cm, "
//     + baseTriangulo
//     + "cm"
// );

// const alturaTriangulo = 7.7;
// console.log("la altura del triángulo es de: " + alturaTriangulo + "cm");

// Perímetro del triángulo 
// const perimetroTriangulo = ladoTrianguloUno + ladoTrianguloDos + baseTriangulo;
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");
function perimetroTriangulo (lado1 , lado2 , base) {
    return lado1 + lado2 + base;
}

// Área del triángulo 
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2; 
// console.log("El área del triángulo es: " + areaTriangulo + "cm");
function areaTriangulo(base, altura) { 
    return (base * altura) / 2; 
}
console.groupEnd();


//Calculando el perímetro y la circunferencia de un círculo
console.group("Círculos")

//Radio 
// const radioCirculo = 5;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diámetro 
// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del circulo es: " + diametroCirculo + "cm");

function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm")

//Circunferencia 
// const perimetroCirculo = diametroCirculo * PI;
// console.log("La Circunferencia del circulo es: " + perimetroCirculo + "cm");
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área 
// const areaCirculo = (radioCirculo * radioCirculo ) * PI;
// console.log("El Área del circulo es: " + areaCirculo + "cm^2");

function areaCirculo(radio){
    return (radio * radio ) * PI;
}
console.groupEnd();


//Aqui vamos a interacturar con el html 

// Cuadrado
function carcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    document.getElementById('resultado').innerHTML = ("El perímetro del cuadrado es: " + perimetro + "cm");
}


function carularAreaCuadrado(){ 
    const input = document.getElementById("inputCuadrado");
    const value = input.value; 

    const area = areaCuadrado(value); 
    document.getElementById('resultado').innerHTML = ("El área del cuadrado es: " + area + "cm^2");
}
// Triangulo 
function calcularPerimetroTriangulo() {
    const lado1 = parseInt(document.getElementById("inputLado1").value);
    const lado2 = parseInt(document.getElementById("inputLado2").value);
    const base = parseInt(document.getElementById("inputBase").value);

    const perimetro = perimetroTriangulo(lado1,lado2,base);
    document.getElementById('resultadoTriangulo').innerHTML = ("El perímetro del triangulo es: " + perimetro + "cm");
}

function calcularAreaTriangulo() {
    const base = parseInt(document.getElementById("inputBase").value);
    const altura = parseInt(document.getElementById("inputAltura").value);

    const area = areaTriangulo(base,altura);
    document.getElementById('resultadoTriangulo').innerHTML = ("El área del triangulo es: " + area + "cm^2");
}
// hipotenusa

function calcularHipotenusaTriangulo(){
    const lado1 = parseInt(document.getElementById("inputLado1").value);
    const lado2 = parseInt(document.getElementById("inputLado2").value);
    const base = parseInt(document.getElementById("inputBase").value);

    if(lado1 == lado2){
        document.getElementById('isoceles').innerHTML = ("Es un triangulo isoceles");
    } else {
        document.getElementById('isoceles').innerHTML = ("No es un triangulo isoceles");
    }
    const h = Math.sqrt(lado1**2 - base**2/ 4)
    document.getElementById('resultadoHipotenusa').innerHTML = ("La hipotenusa del triangulo es: " + parseInt(h) + "cm");
}

//Calculando valores del Circulo

function calcularDiametro() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    document.getElementById('resultadoCirculo').innerHTML = ("El diametro es: " + diametro + "cm");

}

function calcularCircunferencia() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    document.getElementById('resultadoCirculo').innerHTML = ("La Circunferencia es: " + parseInt(perimetro) + "cm");
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    document.getElementById('resultadoCirculo').innerHTML = ("El area es: " + parseInt(area) + "cm");
}
