const monto = process.argv[2]
console.log("El valor ingresado es" , monto)
const numero = parseInt(monto)
if(numero> 500){
    console.log("Has ingresado un valor > de 500")
}else{
    console.log("El numero es menor de 500")
}
