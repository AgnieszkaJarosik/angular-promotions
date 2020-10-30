import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DraftService {
  constructor() { }

  saveDraft(form, value): any {
    localStorage.setItem(form, JSON.stringify(value));
  }

  getDraft(form): any {
    try {
      const data = localStorage.getItem(form);
      if (data) {
        return JSON.parse(data);
      } else {
        return {};
      }
    } catch (e) {
      console.log(e);
      return {};
    }
  }
}
