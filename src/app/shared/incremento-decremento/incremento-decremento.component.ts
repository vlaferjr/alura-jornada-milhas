import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-incremento-decremento',
  templateUrl: './incremento-decremento.component.html',
  styleUrls: ['./incremento-decremento.component.scss']
})
export class IncrementoDecrementoComponent {
    @Input() src: string = ''; //caminho da imagem
    @Input() alt: string = ''; //texto alternativo
}
