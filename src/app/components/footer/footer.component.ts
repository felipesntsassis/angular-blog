import { Component } from '@angular/core';

import { BLOG_TITLE } from './../../shared/domains';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.css',
    './footer.component.resp.css'
  ]
})
export class FooterComponent {

  blogTitle: string = BLOG_TITLE;

  currentDate: Date = new Date();

}
