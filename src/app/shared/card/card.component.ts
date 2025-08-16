import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  /*a variant que vem do html pode ser primary ou secondary com valor inicial primary*/
  @Input() variant: 'primary' | 'secondary' = 'primary';
}
