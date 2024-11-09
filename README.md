# appnodejs
Aplicación de tareas pendientes con Node.js y asincronismo mediante línea de comandos.

En el archivo src/index.js tenemos la función para leer tareas y para eliminar tareas:
-> cargarTareas(): Lee las tareas desde el archivo tareas.json de forma asincrónica. Si el archivo no existe, devuelve un arreglo vacío.
-> guardarTareas(): Guarda las tareas en el archivo de manera asincrónica.

El reto nos pide que manejemos una línea de comandos de yargs, por ejemplo:
-> agregar: Agrega una nueva tarea al archivo.
-> eliminar: Elimina una tarea, si existe.

Para realizar las pruebas desde la línea de comandos podemos escribir lo siguiente en consola:
1) Para agregar una tarea:

cmd:
node src/index.js agregar --descripcion="Estudiar Node.js"

2) Para eliminar una tarea:

cmd:
node src/index.js eliminar --descripcion="Estudiar Node.js"

Para publicar en GitHub debemos realizar los siguientes pasos:

-git init
-git add .
-git commit -m "Aplicación de tareas pendientes con Node.js y asincronismo"
-git remote add origin <URL_del_repositorio>
-git pull origin main
-git push -u origin main

Y con eso tenemos listo el código!

