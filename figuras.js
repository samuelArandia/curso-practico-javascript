//Calculando el perímetro y el area de un cuadrado 
console.group("Cuadrados");
const ladoCuadrado = 5; 
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

//Perimetro del cuadrado 
const perimetroCuadrado = ladoCuadrado * 4; 
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

//Area del cuadrado 
const areaCuadrado = ladoCuadrado * ladoCuadrado; 
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();


//Calculando el perímetro y el area de un triángulo

console.group("Triángulos")
const ladoTrianguloUno = 10;
const ladoTrianguloDos = 10; 
const baseTriangulo = 5;

console.log(
    "los lados del triángulo miden:" 
    + ladoTrianguloUno 
    + "cm, " 
    + ladoTrianguloDos 
    + "cm, "
    + baseTriangulo
    + "cm"
);

const alturaTriangulo = 7.7;
console.log("la altura del triángulo es de: " + alturaTriangulo + "cm");

// Perímetro del triángulo 
const perimetroTriangulo = ladoTrianguloUno + ladoTrianguloDos + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

// Área del triángulo 
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2; 
console.log("El área del triángulo es: " + areaTriangulo + "cm");

console.groupEnd();


//Calculando el perímetro y la circunferencia de un círculo
console.group("Círculos")

//Radio 
const radioCirculo = 5;
console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diámetro 
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del circulo es: " + diametroCirculo + "cm");
// PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm")

//Circunferencia 
const perimetroCirculo = diametroCirculo * PI;
console.log("La Circunferencia del circulo es: " + perimetroCirculo + "cm");

//Área 
const areaCirculo = (radioCirculo * radioCirculo ) * PI;
console.log("El Área del circulo es: " + areaCirculo + "cm^2");
console.groupEnd();