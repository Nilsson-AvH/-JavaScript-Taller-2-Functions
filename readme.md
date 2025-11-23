# Taller 2: Funciones


1. Juego: Adivina el Número mágico

    A partir de la definición de la funcion `adivinar()` debes diseñar una solución para adivinar el número ingresado por el usuario

    ```js
    function adivinar() {
        const numeroAleatorio = Math.floor( Math.random() * 10 ) + 1;    // Aleatorio de 1 a 10;
        // Tu código aquí
    }
    ```
    **Reto**
    1. La funcion debe solicitar al usuario un número, usa la funcion `prompt()`
    2. El usuario debe tener `5` intentos para adivinar.
    3. En cada intento debe dar pistas como `Intenta un número más alto`, `Intenta un número más bajo`
    4. En el momento que se acierta devolver al usuario un mensaje `Has adivinado!`

    **Explicacion**
    Te vamos a explicar como se genera el número aleatorio.
    - La expressión `Math.floor( Math.random() * 10 ) + 1` en JavaScript genera un número aleatorio entre 1 y 10.
    - `Math.random()` crea un número decimal entre 0 (incluido) y 1 (excluido), ejemplo: `0.5203941479712901`, `0.7946749988784787`
    - `* 100` lo escala al rango de 0 a 9.9999999999999999, y
    - `Math.floor()` redondea ese número hacia abajo al entero más cercano, dando como resultado un número aleatorio entre 0 al 9.
    - Finalmente, el `+ 1` desplaza el rango de 1 al 10.

    NOTA: Entender la lógica para generar el número aleatorio es importante, pero no entenderlo, no impide la realización de este ejercicio.


2. Organizador de Biblioteca Personal

    A partir del siguiente objeto debes resolver la capacidad que tiene el método `agregarLibro()`, para agregar nuevos libros a la biblioteca de libros.

    ```js
    const biblioteca = {
        libros: [],
        agregarLibro: function(titulo, autor, leido) {
            // Tu código aquí
        },
        listarLibrosPendientes: function() {
            // Tu código aquí
        },
        estadisticas: function() {
            // Tu código aquí

            return {
                leidos: ,
                noLeidos: 
            }
        }
    };
    ```
    **Reto**
    1. Tu solución debe garantizar que los libros se guarden en la lista `libros` de la siguiente manera, usando el método `agregarLibro()`:
        ```js
        [
            { titulo: 'Eloquent JavaScript', autor: 'Marijn Haverbeke', leido: true },
            { titulo: 'You Do not kwon JS: Async & Performance', autor: 'Kyle Simpson', leido: false },
            { titulo: 'Aprendiendo JavaScript: desde cero hasta ECMAScript 6', autor: 'Carlos Azaustre', leido: false },
            { titulo: 'JavaScript The Good Parts', autor: 'Douglas Crockford', leido: true },
            { titulo: 'JavaScript Design Patterns', autor: 'Addy Osmani', leido: true },
        ]
        ```
    2. Tu solución debe garantizar que los libros por leer se listen al invocar `listarLibrosPendientes()` de la siguiente manera
        ```js
        Libros pendientes
         - You Do not kwon JS: Async & Performance
         - Aprendiendo JavaScript: desde cero hasta ECMAScript 6
        ```
    3. Tu solución debe mostrar el porcentaje de libros leidos y no leidos
        ```js
        Estadisticas
         - Leidos: 40%
         - No leidos: 60%
        ```