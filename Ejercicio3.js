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


//Copia del array original de programadores
let programadoresCopy = JSON.parse(JSON.stringify(programadores));

//Bucle para recorrer los programadores y encontrar al programador "Manuel"
for (let i = 0; i < programadoresCopy.length; i++) {

  if (programadoresCopy[i].nombre === "Manuel") {
    //Bucle para recorrer las tareas de "Manuel"
    for (let j = 0; j < programadoresCopy[i].tareas.length; j++) {
      //Si se trata de las tareas "Tarea 4.2" o "Tarea 4.3" se modifica el tie mpo de desarrollo de estas a 0 horas 
      if (
        programadoresCopy[i].tareas[j].nombreTarea === "Tarea 4.2" ||
        programadoresCopy[i].tareas[j].nombreTarea === "Tarea 4.3"
      ) {
        programadoresCopy[i].tareas[j].tiempoDesarrollo = "0 horas";
      }
    }
  }
}
console.log(programadoresCopy);

//He estado investigando hacerlo con el método slice() y forEach() pero no sabia muy bien cómo hacerlo

//Con map generamos una nueva copia del array original
let programadoresCopia = programadores.map((programador) => {

  //En la devolución del primer map verifica si el nombre del programador es "Manuel"
  if (programador.nombre === "Manuel") {

    //Si el nombre del programador es "Manuel" utilizamos otro map para iterar entre las tareas de este programador
    programador.tareas = programador.tareas.map((tarea) => {

      //En la devolución de este segundo map, se utiliza un operador ternario para verificar si la tarea es la 4.2 o 4.3 y modificar su tiempoDesarrollo a "0 horas"
      return tarea.idTarea === 4.2 || tarea.idTarea === 4.3
        ? { ...tarea, tiempoDesarrollo: "0 horas" }
        : tarea;
    });
  }
  return programador;
});

console.log(programadoresCopia);
