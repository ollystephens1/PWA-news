import { Component, Input } from '@angular/core';
import { IArticle } from '../../interfaces/article.interface';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() article: IArticle;

  constructor() { }
}
