/**
 * 
 * innerHTML = div, h, p, buttons
 */


function pintarNumero(number) {
    //document.getElementById('data').value = number;
    pintarDatos(number);
}

function pintarOperador(operator) {
    //document.getElementById('data').value = operator;
    pintarDatos(` ${operator} `);
}

function pintarDatos(dato) {
    let valorInput = document.getElementById('data');
    valorInput.value = `${valorInput.value}${dato}`;
}

function clear() {
    documento.getElementById('data').value = null;
}

function mostrarResultado() {
    let valorInput = document.getElementById('data').value;
    let arreglo = valorInput.split(' ');

    switch (arreglo[1]) {
        case '+':
            let suma = parseInt(arreglo[0]) + parseInt(arreglo[2]);
            document.getElementById('data').value = suma;
            break;

        case '-':
            let resta = parseInt(arreglo[0]) - (parseInt(arreglo[2]));
            document.getElementById('data').value = resta;
            break;

        case '*':
            let multiplicar = parseInt(arreglo[0]) * (parseInt(arreglo[2]));
            document.getElementById('data').value = multiplicar;
            break;

        case '/':
            let dividir = parseInt(arreglo[0]) / (parseInt(arreglo[2]));
            document.getElementById('data').value = dividir;
            break;
    }
}

function mensajeDia() {

    let dia = prompt("Ingrese un dia de la semana (La primera en mayuscula)");

    switch (dia) {
        case 'Lunes':
            swal("¡Feliz Lunes! Que tengas un gran comienzo de Semana.");
            break;

        case 'Martes':
            swal("¡Feliz Martes! Acepta lo que es, suelta lo que se fue y ten fe en lo que vendra.");
            break;

        case 'Miercoles':
            swal("¡Feliz Miercoles! Vive, Ama y se muy pero muy Feliz :D");
            break;

        case 'Jueves':
            swal("¡Feliz Jueves! Te deseo Paciencia, saber esperar es una virtud que todos podemos tener.");
            break;

        case 'Viernes':
            swal("¡Feliz Viernes! El tiempo no se detiene ni espera por nadie, por eso aprovecha tu vida y NO dejes nada par mañana.");
            break;

        case 'Sabado':
            swal("¡Feliz Sabado! Los limites solo se encuentran en tu propia mente.");
            break;

        case 'Domingo':
            swal("¡Feliz Domingo! Nunca dejes de creer.");
            break;

        default:
            swal("Los datos ingresados no corresponden a un dia de la semana")

    }

}