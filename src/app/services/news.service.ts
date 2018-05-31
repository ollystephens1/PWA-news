import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { IArticle } from '../interfaces/article.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class NewsService {
  url = 'https://newsapi.org/v1/articles';
  apiKey = '9d10c7a2f58c474c9600538413e84222';
  sortBy = 'top';
  sourceId = 'bbc-news';
  
  constructor(private http: HttpClient) {}

  getArticles(id?: string): Observable<IArticle[]> {
    const params = this.setParams(id);
    return this.http.get(this.url, { params }).pipe(map((res: any) => {
      const articles = res.articles.map((article: IArticle) => {
        article.sourceId = id;
        return article;
      });

      console.log(articles);
      return articles;
    }));
  }

  getSources(): Observable<any> {
    return this.http.get('assets/resources/sources.json');
  }

  setParams(id?: string): HttpParams {
    if (id) {
      this.sourceId = id;
    }

    return new HttpParams()
      .set('apiKey', this.apiKey)
      .set('source', this.sourceId)
      .set('sortBy', this.sortBy);
  }
}