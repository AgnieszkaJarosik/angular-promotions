import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {PromotionService} from './services/promotion.service';

@Injectable({
  providedIn: 'root'
})
export class BonusGuard implements CanActivate {
  constructor(private promSvc: PromotionService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.promSvc.bonus) {
      return true;
    } else {
      return false;
    }
  }
}
