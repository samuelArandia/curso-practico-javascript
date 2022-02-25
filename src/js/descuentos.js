// const precioOriginal = 120;
// const descuento = 18; 

// const porcentajePrecioConDescuento = 100 - descuento; 
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento; 
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
     
    return precioConDescuento;
}

// console.log({
//     precioConDescuento,
//     porcentajePrecioConDescuento,
//     precioOriginal,
//     descuento,
// });




function onclickButtonPrice() { 
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value; 

    const InputCoupon = document.getElementById("InputCoupon");
    const couponValue = InputCoupon.value; 

    const coupons = [
        "hola_spidy",
        "hola_deadpool",
        "hola_ironman",
    ];

    let descuento; 

    switch (couponValue){
        case coupons[0]: // "hola_spidy"
            descuento = 15; 
        break;
        case coupons[1]:// "hola_deadpool"
            descuento = 30;
        break;
        case coupons[2]:// "hola_ironman"
            descuento = 25; 
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento son :  $" + precioConDescuento; 
}


// Con if 

function onclickButtonPriceValid() { 
    const inputPriceValid = document.getElementById("inputPriceValid");
    const priceValueValid = inputPriceValid.value; 

    const InputCouponValid = document.getElementById("InputCouponValid");
    const couponValueValid = InputCouponValid.value; 

    const coupons = [
        "hola_spidy",
        "hola_deadpool",
        "hola_ironman",
    ];
    if (!coupons.includes(couponValueValid)) {
        alert("El cupon " + couponValueValid + " no es valido"); 
    } else if (couponValueValid === "hola_spidy") { 
        descuento = 15;
    } else if (couponValueValid === "hola_deadpool") {
        descuento = 30;
    } else if (couponValueValid === "hola_ironman") {
        descuento = 25;
    };
    const precioConDescuento = calcularPrecioConDescuento(priceValueValid, descuento);
    console.log(descuento);
    const resultPriceValid = document.getElementById("resultPriceValid");
    resultPriceValid.innerText = "El precio con descuento son :  $" + precioConDescuento; 
}

// Array y condicionales 

function onclickButtonPriceArrow() { 
    const inputPriceArrow = document.getElementById("inputPriceArrow");
    const priceValueArrow = inputPriceArrow.value; 

    const InputCouponArrow = document.getElementById("InputCouponArrow");
    const couponValueArrow = InputCouponArrow.value; 

    const coupons = [
        {
            name:"hola_spidy", 
            discount: 15,
        },
        {
            name:"hola_deadpool",
            discount:30,
        },
        {
            name: "hola_ironman",
            discount: 25,
        }
    ];
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValueArrow;
    };
    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + couponValueArrow   + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValueArrow, descuento);

        const resultPriceArrow = document.getElementById("resultPriceArrow");
        resultPriceArrow.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}
