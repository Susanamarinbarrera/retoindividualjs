var precioBase = 400000;
var descuento = 50;

// funcion que procesa el descuento y lo valida
function calcularPrecio (precioBase, descuento){
    if (precioBase <= 0 || descuento < 0 || descuento > 100){
        return console.log("Los valores ingresados son invalidos");
    }
    else if(descuento == 0){
        return console.log("$" + precioBase + " No es posible acceder al descuento en esta oportunidad");
    }
    else if(descuento > 0 && descuento <= 100){
        return console.log("Tu precio final con descuento es $ ¡Qué lo disrutes!" + (precioBase - (precioBase * descuento / 100)));
    }
}

// metodo
calcularPrecio(precioBase, descuento)
