import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    //Componente de dialogo do Angular Material
    this.dialog.open(ModalComponent);
  }
}
