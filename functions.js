//define la funcion de suma(add)
function add(a,b) {
    return a+b;
}

//define la funcion de resta(substract)
    function substract(a,b) {
        return a-b;
}
//define la funcion de multiplicacion (multiply)
    function multiply (a,b) {
        return a * b;
    }
    //define la funcion dividir (divide)
    function divide (a,b) {
        if (b == 0){
            return "error, no se puede dividir entre cero"
        } else {
            return a / b;
        }
        
    }
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;

//Module:Es un archivo de codigo fuente que contiene definiciones y declaraciones de funciones 
//Functions:Son bloques de codigo que realizan una tarea especifica 
//Require:Es para incluir un modulo o biblioteca externa de un programa
//Process.stout:Es un objeto que representa la salida estandar de un proceso de un sistema operativo 
//Return:Palabra clave utilizada para devolver un valor desde una funcion  
