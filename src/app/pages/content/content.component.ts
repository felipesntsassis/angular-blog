import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { dataFake } from '../../data/data-fake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: [
    './content.component.css',
    './content.component.resp.css'
  ]
})
export class ContentComponent implements OnInit {

  contentTitle:string = 'MINHA NOTÍCIA';
  contentDescription: string = 'Olá mundo';
  photoCover: string = 'https://topcinema.com.br/wp-content/uploads/2023/10/cats-133.jpg';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(value =>
      this.id = value.get('id')
    );
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.find(article => article.id === id);

    if (result) {
      this.photoCover = result.photoCover;
      this.contentTitle = result.title;
      this.contentDescription = result.description;
    }
  }
}
