function adivinar() {
    const numeroAleatorio = Math.floor( Math.random() * 10 ) + 1;    // Aleatorio de 1 a 10;
    for ( let i = 0 ; i <= 4 ; i++) {
        console.log(`Tienes ${5-i} intentos para adivinar el numero, `);
        let numero = parseInt(prompt(`Digite un numero entrero de 1 a 10: `));

        if(numero > numeroAleatorio){
            console.log(`Intenta un número más bajo`);
        }else if(numero < numeroAleatorio){
            console.log(`Intenta un número más alto`);
        }else if(numero === numeroAleatorio){
            return console.log(`Has adivinado! el numero era ${numeroAleatorio}`);
        }else{
            console.log(`Eres un fracaso.`);
        }
    }
}

console.log(`El super adivinador de numeros mas prestigioso del cosmos.`);

adivinar();
// 1. Juego: Adivina el Número mágico

//     A partir de la definición de la funcion `adivinar()` debes diseñar una solución para adivinar el número ingresado por el usuario

//     ```js
//     function adivinar() {
//         const numeroAleatorio = Math.floor( Math.random() * 10 ) + 1;    // Aleatorio de 1 a 10;
//         // Tu código aquí
//     }
//     ```
//     **Reto**
//     1. La funcion debe solicitar al usuario un número, usa la funcion `prompt()`
//     2. El usuario debe tener `5` intentos para adivinar.
//     3. En cada intento debe dar pistas como `Intenta un número más alto`, `Intenta un número más bajo`
//     4. En el momento que se acierta devolver al usuario un mensaje `Has adivinado!`

//     **Explicacion**
//     Te vamos a explicar como se genera el número aleatorio.
//     - La expressión `Math.floor( Math.random() * 10 ) + 1` en JavaScript genera un número aleatorio entre 1 y 10.
//     - `Math.random()` crea un número decimal entre 0 (incluido) y 1 (excluido), ejemplo: `0.5203941479712901`, `0.7946749988784787`
//     - `* 100` lo escala al rango de 0 a 9.9999999999999999, y
//     - `Math.floor()` redondea ese número hacia abajo al entero más cercano, dando como resultado un número aleatorio entre 0 al 9.
//     - Finalmente, el `+ 1` desplaza el rango de 1 al 10.

//     NOTA: Entender la lógica para generar el número aleatorio es importante, pero no entenderlo, no impide la realización de este ejercicio.
