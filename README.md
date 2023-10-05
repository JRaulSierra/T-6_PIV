# T-6_PIV
Tarea realizada en Angular.

Utilizaremos un Toolbar (https://material.angular.io/components/toolbar/overview) para poder crear un menu, el cual tendra dos opciones, uno debe ser formulario y otro tabla.

El componente Formulario debe de estar dentro de un componente Card, para pedir los siguientes datos : 
Nombre Mascota
Raza Mascota (PERRO, GATO, HAMSTER)

Pediremos se ingrese el nombre en un MatInput, en este caso debe de mostrar un icon de id, como un prefijo.

Pediremos nos seleccione el tipo de Mascota que puede ser PERRO, GATO o HAMSTER, y debe de ingresarlo a través de un grupo de RadioButton (https://material.angular.io/components/radio/overview) 

Luego un boton que permita agregar a la mascota, al momento de agregar la mascota debe de mostrar un Dialog(https://material.angular.io/components/dialog/overview), que diga si esta seguro de agregar la mascota, si escoge que si, la mascota se agregara y si escoge que no la mascota no se agregara. 

Y el otro componente llamado Tabla, debe de tener una tabla con Material que muestre los datos de las mascotas almacenadas.
# Environment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
