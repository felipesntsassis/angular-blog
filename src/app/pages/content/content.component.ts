import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  contentTitle:string = 'MINHA NOTÍCIA';
  contentDescription: string = 'Olá mundo';
  photoCover: string = 'https://topcinema.com.br/wp-content/uploads/2023/10/cats-133.jpg';

}
