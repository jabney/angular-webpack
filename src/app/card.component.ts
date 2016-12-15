import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: 'card.component.html'
})
export class CardComponent {
  @Input() header: string = 'this is the header';
  @Input() footer: string = 'this is the footer';
}
