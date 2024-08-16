// Definir variables

// Un nombre: "Ana"
// Un precio: $50.000
// Los nombres de tus series favoritas: "True Detective", "La casa de papel", "La caída de la casa Usher"
// Tus películas favoritas, donde cada película debe incluir su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.

// Mostrar todos esos valores por consola.

// Incrementar la edad en 1 y volver a mostrarla.

// Agregar una serie a la lista de series favoritas y volver a mostrarla.


let Nombre = "Ana";
let edad = 38;
let precio = 650.000;

let seriesFavoritas = ["True Detective", "La casa de papel", "La caída de la casa Usher"];

let peliculasFavoritas = [
    {
        nombre: "En Ningún Lugar",
        año: 2004,
        protagonistas: ["Héctor Alterio", "Noelia Castaño"]
    },
    {
        nombre: "Buenas noches Oppy",
        año: 2022,
        protagonistas: ["Ryan Blanco"]
    },
    {
        nombre: "El abogado del diablo",
        año: 1997,
        protagonistas: ["Keanu Reeves", "Al Pacino", "Charlize Theron"]
    },
];

// Mostrar todos los valores por consola
console.log("Nombre:", Nombre);
console.log("Edad:", edad);
console.log("Precio:", precio);
console.log("Series favoritas:", seriesFavoritas);
console.log("Películas favoritas:");
peliculasFavoritas.forEach(pelicula => {
    console.log("  Nombre:", pelicula.nombre);
    console.log("  Año:", pelicula.año);
    console.log("  Protagonistas:", pelicula.protagonistas.join(", "));
});

// Incrementar la edad en 1
edad += 1;
console.log("Edad actualizada:", edad);

// Agregar una nueva serie a la lista de series favoritas
seriesFavoritas.push("Hacia la noche");
console.log("Series favoritas actualizadas:", seriesFavoritas);
