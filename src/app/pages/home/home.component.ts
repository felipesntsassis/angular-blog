import { Component, OnInit } from '@angular/core';

import { dataFake } from '../../data/data-fake';
import { News } from '../../shared/model/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    './home.component.resp.css'
  ]
})
export class HomeComponent implements OnInit {

  spotlightNews: News | null = null;
  news: News[] = [];

  ngOnInit(): void {
    this.loadNews();
  }

  private loadNews() {
    this.spotlightNews = <News> dataFake.find(data => data.spotlight);
    this.news = dataFake.filter(data => !data.spotlight).map(data => data );
  }

}
