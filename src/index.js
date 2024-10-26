const fs = require('fs').promises;
const yargs = require('yargs');

// Archivo donde se guardarán las tareas
const archivoTareas = 'tareas.json';

//Lee las tareas desde el archivo tareas.json de forma asincrónica. 
//Si el archivo no existe, devuelve un arreglo vacío.
// Función para cargar las tareas desde el archivo
async function cargarTareas() {
  try {
    const data = await fs.readFile(archivoTareas, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return []; // Si el archivo no existe, retorna un arreglo vacío
  }
}

// Función para guardar las tareas en el archivo
//Guarda las tareas en el archivo de manera asincrónica.
async function guardarTareas(tareas) {
  const data = JSON.stringify(tareas, null, 2);
  await fs.writeFile(archivoTareas, data, 'utf8');
}

// Comando para agregar una tarea
yargs.command({
  command: 'agregar',
  describe: 'Agregar una nueva tarea',
  builder: {
    descripcion: {
      describe: 'Descripción de la tarea',
      demandOption: true,
      type: 'string',
    },
  },
  handler: async (argv) => {
    const tareas = await cargarTareas();
    tareas.push({ descripcion: argv.descripcion });
    await guardarTareas(tareas);
    console.log('Tarea agregada:', argv.descripcion);
  },
});

// Comando para eliminar una tarea
yargs.command({
  command: 'eliminar',
  describe: 'Eliminar una tarea',
  builder: {
    descripcion: {
      describe: 'Descripción de la tarea a eliminar',
      demandOption: true,
      type: 'string',
    },
  },
  handler: async (argv) => {
    let tareas = await cargarTareas();
    const tareasFiltradas = tareas.filter(
      (tarea) => tarea.descripcion !== argv.descripcion
    );

    if (tareas.length === tareasFiltradas.length) {
      console.log('Tarea no encontrada:', argv.descripcion);
    } else {
      await guardarTareas(tareasFiltradas);
      console.log('Tarea eliminada:', argv.descripcion);
    }
  },
});

yargs.parse();
