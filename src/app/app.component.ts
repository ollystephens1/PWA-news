import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsService } from './services/news.service';
import { IArticle } from './interfaces/article.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  articles$: Observable<IArticle[]>;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getNews();
  }

  getNews(): void {
    this.articles$ = this.newsService.getArticles();
  }
}
