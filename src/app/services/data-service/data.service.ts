import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Article } from '../../models/article.model';

@Injectable()
export class DataService {

  constructor(http : Http) {
  }

  public getArticles() : Article[] {
      // TODO: get from server and maybe cache
      var articles : Article[] = [{
        artikel_nr: 100005627,
        bezeichnung: '16 GB microSDHC Class 10 Plus Rot',
        h_article_nr: 871079564664747,
        bestell_nr: 1234,
        ek_netto: 1.234,
        rabatt: 3.2,
        shop_vk: 3.49,
        ebay_vk: 3.49,
        amazon_vk: 3.49,
        kapazitat: 16,
        farbe: 'Rot',
        gewicht: 50,
        hersteller: 'Samsung',
        status: 'OK'
      }, {
        artikel_nr: 100005628,
        bezeichnung: '16 GB microSDHC Class 10 Plus Schwarz',
        h_article_nr: 871079578388748,
        bestell_nr: 1244,
        ek_netto: 1.244,
        rabatt: 2.35,
        shop_vk: 3.19,
        ebay_vk: 3.19,
        amazon_vk: 3.19,
        kapazitat: 16,
        farbe: 'Schwarz',
        gewicht: 50,
        hersteller: 'Samsung',
        status: 'OK'
      }];

      return articles;
  }

}
