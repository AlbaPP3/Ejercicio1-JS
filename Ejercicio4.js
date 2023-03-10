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
let programadoresConTareasDeMasDe25Horas = [];

//Bucle for para recorrer los programadores
for (let i = 0; i < programadores.length; i++) {
  let programador = programadores[i];

  //Bucle para recorrer las tareas de cada programador
  for (let j = 0; j < programador.tareas.length; j++) {
    let tarea = programador.tareas[j];

    //Condicion para comprobar si el tiempo de desarrollo es mayor a 25 horas
    if (parseInt(tarea.tiempoDesarrollo.split(" ")[0]) > 25) {

      //Nuevo array para guardar los programadores cuya tarea cumpla la condici??n
      programadoresConTareasDeMasDe25Horas.push(programador);
      break;
    }
  }
}
console.log(programadoresConTareasDeMasDe25Horas);

//He mirado hacerlo con JSON.parse(JSON.stringify(programadores)) para  hacer una copia del array programadores y despu??s usar filter() para crear un nuevo array programadoresConTareasLargas que contenga solo los programadores que tienen tareas con un tiempoDesarrollo superior a 25 horas.No sabia muy bien c??mo seguir, c??mo comprobar los tiempos de desarrollo

/*let programadoresCopia = JSON.parse(JSON.stringify(programadores));

let programadoresConTareasLargas = programadoresCopia.filter(programador => {
  return programador.tarea.

});
});

console.log(programadoresConTareasLargas);*/
