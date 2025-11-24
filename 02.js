// Organizador de Biblioteca Personal

// A partir del siguiente objeto debes resolver la capacidad que tiene el método agregarLibro(), para agregar nuevos libros a la biblioteca de libros.

// const biblioteca = {
//     libros: [],
//     agregarLibro: function(titulo, autor, leido) {
//         // Tu código aquí
//     },
//     listarLibrosPendientes: function() {
//         // Tu código aquí
//     },
//     estadisticas: function() {
//         // Tu código aquí

//         return {
//             leidos: ,
//             noLeidos:
//         }
//     }
// };
// Reto

// Tu solución debe garantizar que los libros se guarden en la lista libros de la siguiente manera, usando el método agregarLibro():
// [
//     { titulo: 'Eloquent JavaScript', autor: 'Marijn Haverbeke', leido: true },
//     { titulo: 'You Do not kwon JS: Async & Performance', autor: 'Kyle Simpson', leido: false },
//     { titulo: 'Aprendiendo JavaScript: desde cero hasta ECMAScript 6', autor: 'Carlos Azaustre', leido: false },
//     { titulo: 'JavaScript The Good Parts', autor: 'Douglas Crockford', leido: true },
//     { titulo: 'JavaScript Design Patterns', autor: 'Addy Osmani', leido: true },
// ]
// Tu solución debe garantizar que los libros por leer se listen al invocar listarLibrosPendientes() de la siguiente manera
// Libros pendientes
//  - You Do not kwon JS: Async & Performance
//  - Aprendiendo JavaScript: desde cero hasta ECMAScript 6
// Tu solución debe mostrar el porcentaje de libros leidos y no leidos
// Estadisticas
//  - Leidos: 40%
//  - No leidos: 60%

const biblioteca = {
    libros: [],
    agregarLibro: function(titulo, autor, leido) {
        this.libros.push({ titulo, autor, leido });
    },
    verLista: function() {
        console.log(this.libros);
    },
    listarLibrosPendientes: function() {
        let message = ``;
        for (let libro of this.libros) {
            if (!libro.leido) {
                message += ` - ${libro.titulo}\n`;
            }
        }
        return `Libros pendientes:\n${message}`;
    },
    estadisticas: function() {
        const totalLibros = this.libros.length;
        let librosLeidos = 0;
        for (let libro of this.libros) {
            if (libro.leido) {
                librosLeidos++;
            }
        }
        const porcentajeLeidos = (librosLeidos / totalLibros) * 100;
        const porcentajeNoLeidos = 100 - porcentajeLeidos;
        return `Estadisticas\n - Leidos: ${porcentajeLeidos}%\n - No leidos: ${porcentajeNoLeidos}%`;
    }
};

biblioteca.agregarLibro('Eloquent JavaScript', 'Marijn Haverbeke', true);
biblioteca.agregarLibro('You Do not kwon JS: Async & Performance', 'Kyle Simpson', false);
biblioteca.agregarLibro('Aprendiendo JavaScript: desde cero hasta ECMAScript 6', 'Carlos Azaustre', false);
biblioteca.agregarLibro('JavaScript The Good Parts', 'Douglas Crockford', true);
biblioteca.agregarLibro('JavaScript Design Patterns', 'Addy Osmani', true);

// console.log(biblioteca.verLista());
console.log(biblioteca.listarLibrosPendientes());
console.log(biblioteca.estadisticas());