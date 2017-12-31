/*Problemas difícil 50 puntos*/

/* 1 Dado un arreglo de números rotar sus elementos hacia la derecha n 
/*Ejemplo:   arr = [1, 2, 3, 4, 5, 6, 7]
		     n = 3
		     retorna [5, 6, 7, 1, 2, 3, 4]*/

var revers = function (){
	var num = [1,2,3,4];
    var n = 3;
    return num.slice(num.length - n).concat(num.slice(0, num.length - n));

};

alert(revers())
//segun el arreglo, tomara la longitud (length) y buscara segun la variable n, concat lo tomara y slice lo presentara, desde la posicion 0.
//slice =devuelde un array nuevo 
//concat =junta las piezas y devuelde un nuevo arreglo

/*4 1 2 3 (1)
3 4 1 2 (2)
2 3 4 1 (3)*/

/*	Revers	esto me ayudo a entender.    
		    var arr =[1, 2, 3, 4];
		    var size = arr.length; //tamaño o longitud del array
		    var lastPosition = size-1; // la ultima posición del array, va ser su tamaño menos 1
		    for(var i=lastPosition; i>=0; i--){ //desde la ultima posicion; la primera posicion; va disminuyendo
		    	console.log(arr[i]);
		    }*/


/*Problemas fáciles 20 puntos*/

/* 11 Diseñar un programa que lea las calificaciones de un alumno (10 notas en total).
* Debes calcular e imprimir su promedio, y decir a través de un alert si el ramo fue aprobado o no.
* Las notas van de 1 a 7 y se aprueba con un promedio igual o mayor a 4. 
*/
function promedio(){
var notas = [1,2,3,4,5,6,7,7,6,5]
var suma =0;
for(var i = 0; i <notas.length; i++) 
{
	suma += notas[i];
}
	var prom = (suma/10);
	document.write("Su promedio es:" + prom);

if (prom >= 4){
 	alert("¡Felicitaciones haz aprobado el ramo!");
}else {
	alert("No haz aprobado el ramo por está vez");
}
} promedio()

/*for ira recorriendo las notas. Entonces la variable suma guarda cada nota y las va sumando.
*Luego la variable promedio llama al total sumado y lo divide por la cantidad de notas, que en este caso es 10.
*Se imprime en la pagina un mensaje con el promedio, y si el promedio es mayor a 4 lo felicitara, de lo contrario, 
*avisará que no se logro aprobar.

*/

/*14 Dado un arreglo de 10 números, retornar un nuevo arreglo solo con los números pares.
Ejemplo: input arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   output nuevoArr = [2, 4, 6, 8, 10]*/
var arrDiez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var pares = arrDiez.filter(function(pares){
	return pares % 2 == 0;
});

console.log(pares);

//filter= filtra los numeros pares segun el residuo 0

/*15 Dado un arreglo de 4 números positivos, devolver un nuevo arreglo con cada elemento multiplicado por 12.
Ejemplo: input arr = [1, 2, 3, 4]
		 output nuevoArr = [12, 24, 36, 48] */
var numbers = [1,2,3,4];
var mul = numbers.map(function (x) {
	return x * 12;
});

//map() crea un nuevo array con los resultados de la funcion que se le pidio.