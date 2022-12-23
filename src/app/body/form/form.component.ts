import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title = "FRAMEWORK ANGULAR"; //Titulo de la Web
  cursos : string[] = []; //Creamos un Array donde se almacenaran los items

  addCurso(nombreC:String){
    this.cursos.push(String(nombreC)); //Agregamos al Array Curso el Valor ingresado en el Input
  }
}
