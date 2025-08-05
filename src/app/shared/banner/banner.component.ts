import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  /*propriedades que serão recebidas do componente pai, o componente pai é o home.component.html
  o banner vai receber a imagem e o texto alternativo, o banner vai ser reutilizado em outros lugares,
  então é interessante que ele receba as informações de forma dinâmica para isso, usamos o decorator @Input*/
  @Input() src: string = ''; //caminho da imagem
  @Input() alt: string = ''; //texto alternativo

}
