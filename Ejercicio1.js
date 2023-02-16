'Use strict';
let programadores = [
  {
    nombre: 'Juan',
    id: 1,
    tareas: [
      {
        nombreTarea: 'Tarea 1.1',
        idTarea: 1.1,
        tiempoDesarrollo: '25 horas',
      },
      {
        nombreTarea: 'Tarea 1.2',
        idTarea: 1.2,
        tiempoDesarrollo: '10 horas',
      },
      { nombreTarea: 'Tarea 1.3', idTarea: 1.3, tiempoDesarrollo: '2 horas' },
      {
        nombreTarea: 'Tarea 1.4',
        idTarea: 1.4,
        tiempoDesarrollo: '2.5 horas',
      },
    ],
  },
  {
    nombre: 'Lucia',
    id: 2,
    tareas: [
      { nombreTarea: 'Tarea 2.1', idTarea: 2.1, tiempoDesarrollo: '5 horas' },
      { nombreTarea: 'Tarea 2.2', idTarea: 2.2, tiempoDesarrollo: '1 hora' },
      {
        nombreTarea: 'Tarea 2.3',
        idTarea: 2.3,
        tiempoDesarrollo: '26 horas',
      },
      {
        nombreTarea: 'Tarea 2.4',
        idTarea: 2.4,
        tiempoDesarrollo: '3.75 horas',
      },
    ],
  },
  {
    nombre: 'David',
    id: 3,
    tareas: [
      { nombreTarea: 'Tarea 3.1', idTarea: 3.1, tiempoDesarrollo: '7 horas' },
      {
        nombreTarea: 'Tarea 3.2',
        idTarea: 3.2,
        tiempoDesarrollo: '6 horas',
      },
      {
        nombreTarea: 'Tarea 3.3',
        idTarea: 3.3,
        tiempoDesarrollo: '9 horas',
      },
      {
        nombreTarea: 'Tarea 3.4',
        idTarea: 3.4,
        tiempoDesarrollo: '2.5 horas',
      },
    ],
  },
  {
    nombre: 'Manuel',
    id: 4,
    tareas: [
      { nombreTarea: 'Tarea 4.1', idTarea: 4.1, tiempoDesarrollo: '7 horas' },
      {
        nombreTarea: 'Tarea 4.2',
        idTarea: 4.2,
        tiempoDesarrollo: '16 horas',
      },
      {
        nombreTarea: 'Tarea 4.3',
        idTarea: 4.3,
        tiempoDesarrollo: '29 horas',
      },
      {
        nombreTarea: 'Tarea 4.4',
        idTarea: 4.4,
        tiempoDesarrollo: '2.5 horas',
      },
    ],
  },
];


let tareaMaxima = {
  nombreTarea: "",
  tiempoDesarrollo: 0
};

let nombreProgramador = "";

//Bucle para recorrer el array de programadores
for (let i = 0; i < programadores.length; i++) {
  let programador = programadores[i];

  //Bucle para recorrer las tareas de cada programadors
  for (let j = 0; j < programador.tareas.length; j++) {
      let tarea = programador.tareas[j];
      let tiempo = parseFloat(tarea.tiempoDesarrollo.split(" ")[0]);

      //Comparación del tiempo de la tarea con el tiempo de desarrollo máximo encontrado
      if (tiempo > tareaMaxima.tiempoDesarrollo) {

        //Actualización del nombre de la tarea
          tareaMaxima.nombreTarea = tarea.nombreTarea;

        //Actualización del tiempo de la nueva tarea con mayor tiempo
          tareaMaxima.tiempoDesarrollo = tiempo;

          //Actualización del nombre del programador que realiza la tarea con más tiempo de desarrollo
          nombreProgramador = programador.nombre;
      }
  }
}

console.log("La tarea con mayor tiempo de desarrollo es " + tareaMaxima.nombreTarea + " con " + tareaMaxima.tiempoDesarrollo + " horas");
console.log("El programador que realiza esta tarea es " + nombreProgramador);

//Método reduce() para iterar sobre cada programador y encontrar la tarea con el tiempo de desarrollo más alto
const tareaMasLarga = programadores.reduce((tareaMasLarga, programador) => {
  //Función find() para buscar la tarea correspondiente en el array de tareas del programador
  return programador.tareas.find(tarea => {
    const tiempo = parseFloat(tarea.tiempoDesarrollo);
    //Función Math.max() compara el tiempo de desarrollo de la tarea actual con el tiempo de desarrollo de la tarea más larga encontrada hasta el momento.Si la más larga es la actual te devuelve la actual, si no devuelve la más larga encontrada hasta el momento
    return tiempo === Math.max(tiempo, parseFloat(tareaMasLarga.tiempoDesarrollo));
  }) || tareaMasLarga;
  //Inicialización de la variable tareaMasLarga como un objeto vacío con un tiempo de desarrollo inicial de "0 horas"
}, {tiempoDesarrollo: "0 horas"});

console.log(tareaMasLarga);
