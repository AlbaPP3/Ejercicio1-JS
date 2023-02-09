'Use strict';
//Bucle para recorrer los programadores y sus tareas
for(let i = 0;i < programadores.length; i++){
  const tareas = programadores[i].tareas;
}
//Array para guardar las tareas de cada programador que antes hemos recorrido 
programadoresTareas.push(tareas);
//Bucle para recorrer este array de tareas que hemos guardado
for(let t = 0; t < tareas.length; t++){
  //Array para almacenar el tiempo de desarollo de cada programador
  tiempoDesarrollo.push(tareas[t].tiempoDesarrollo);
  tiempoMaximo = tiempoMaximo(tiempoDesarrollo);

  if(tiempoMaximo == programadores[i].tareas[t].tiempoDesarrollo){
    TareaMayorTiempo = programadores[i].tareas[t].idTarea;
  }
}
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
