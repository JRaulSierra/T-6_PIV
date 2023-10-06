import {Component, EventEmitter, Output} from '@angular/core';
import {DialogMascotasComponent} from "../dialog-mascotas/dialog-mascotas.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{
  @Output() enviarMascota = new EventEmitter<Array<any>>();
  petName: string = "";
  petType: string = "";
  petTypes: Array<string> = ['PERRO', 'GATO', 'HAMSTER']
  constructor(public dialog: MatDialog) {}


  addPet(){
    const dialogRef = this.dialog.open(DialogMascotasComponent, {
      data: {name: this.petName, raza: this.petType},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.enviarMascota.emit(result);
    });
  }

}
