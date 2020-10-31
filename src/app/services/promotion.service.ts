import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  public active;
  public bonus;
  public onPromotionsChange = new EventEmitter();
  public onActiveChange = new EventEmitter();
  public onBonusChange = new EventEmitter();

  constructor() { }

  activeChange(value: boolean): void {
    this.active = value;
    this.onActiveChange.emit(value);
  }

  bonusChange(value: boolean): void {
    this.bonus = value;
    this.onBonusChange.emit(value);
  }

  savePromotion(value): void {
    let promotionsArray = [];

    try {
      const data = localStorage.getItem('promotions');
      if (data) {
        promotionsArray = JSON.parse(data);
      }
      promotionsArray = [...promotionsArray, value];
    } catch (e) {
      console.log(e);
    }
    localStorage.setItem('promotions', JSON.stringify(promotionsArray));
    this.onPromotionsChange.emit(promotionsArray);
  }

  getPromotions(): [] {
    try {
      const data = localStorage.getItem('promotions');
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  deletePromotion(value): void {
    let promotionsArray = [];

    try {
      const data = localStorage.getItem('promotions');
      if (data) {
        promotionsArray = JSON.parse(data);
      }
      promotionsArray = promotionsArray.filter( p => p.description.marketingName !== value.description.marketingName);
    } catch (e) {
      console.log(e);
    }
    localStorage.setItem('promotions', JSON.stringify(promotionsArray));
    this.onPromotionsChange.emit(promotionsArray);
  }
}
