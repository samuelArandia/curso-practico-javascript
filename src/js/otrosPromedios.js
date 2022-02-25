const calcularMediaGeometrica = (lista) =>{
    let acumulado = 0;
    producto = lista.map((elemento) => {
        if(acumulado == 0){
            acumulado = (elemento);
        } else {
            acumulado *= (elemento);
        }
    });
}
    const mediageometrica = Math.pow(acumulado,(1/lista.length));
    return mediageometrica;