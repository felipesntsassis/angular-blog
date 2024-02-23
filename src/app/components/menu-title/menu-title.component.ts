import { Component } from '@angular/core';
import { BLOG_TITLE } from './../../shared/domains';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: [
    './menu-title.component.css',
    './menu-title.component.resp.css',
  ],
})
export class MenuTitleComponent {

  title: string = BLOG_TITLE;

}
