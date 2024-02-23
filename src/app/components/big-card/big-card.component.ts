import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: [
    './big-card.component.css',
    './big-card.component.resp.css'
  ]
})
export class BigCardComponent {

  @Input()
  cardTitle: string | null | undefined = '';
  @Input()
  cardDescription: string | null | undefined = '';
  @Input()
  photoCover: string | null | undefined = '';
  @Input()
  id: string | null | undefined = '0';

}
