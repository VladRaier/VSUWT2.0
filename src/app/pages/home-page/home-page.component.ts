import { Component } from '@angular/core';
import mockNews from './data/mock-news';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  protected readonly mockNews = mockNews;
}
