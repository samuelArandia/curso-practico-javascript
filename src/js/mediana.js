// Mediana

function carcularMedianaArimetica(lista1) { 
    const sumaLista1 = lista1.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento; 
        }
    );
    const mediaArimetica = sumaLista1 / lista1.length;
    return mediaArimetica;
}

const lista1 = [ 
    100,
    800,
    200,
    50,
    1111,
    550,
    2000,
];

const mitadLista1 = parseInt(lista1.length / 2); 

function esPar(numero){ 
    if (numero % 2 === 0 ) { 
        return true;
    } else { 
        return false;
    }
}

function compareNumbers(a, b){ 
    return a - b;
}
lista1.sort(compareNumbers);


let mediana; 

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElementos = carcularMedianaArimetica([
        elemento1,
        elemento2,
    ])
    mediana = promedioElementos;
} else {
    mediana = lista1[mitadLista1];
}

