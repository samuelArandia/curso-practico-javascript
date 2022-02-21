// Helpers 
function esPar(numero) { 
    return (numero % 2 === 0); 
}

function carcularMedianaArimetica(lista) { 
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento; 
        }
    );
    const mediaArimetica = sumaLista / lista.length;
    return mediaArimetica;
}

// Mediana General
const salariosChile = chile.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosChileSorted = salariosChile.sort(
    function (salaryA, salaryB) { 
        return salaryA - salaryB; 
    }
);

// Calculadora mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = carcularMedianaArimetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralChile = medianaSalarios(salariosChileSorted);

// Mediana de top 10%

const spliceStart = (salariosChileSorted.length * 90) / 100;
const spliceCount = salariosChileSorted.length - spliceStart; 

const salariosChileTop10 = salariosChileSorted.splice(
    spliceStart,
    spliceCount,
);
const medianaTop10Chile = medianaSalarios(salariosChileTop10);

console.log(
    medianaGeneralChile,
    medianaTop10Chile,
);