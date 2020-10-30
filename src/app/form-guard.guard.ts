import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PromotionService} from './services/promotion.service';

@Injectable({
  providedIn: 'root'
})
export class FormGuardGuard implements CanActivate {
  constructor(private promSvc: PromotionService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean | UrlTree {

    if (this.promSvc.active) {
      return true;
    } else {
      return false;
    }
    // return this.promSvc.onActiveChange.pipe(
    //   map(res => {
    //     if (res) {
    //       console.log('guard true');
    //       return true;
    //     } else {
    //       console.log('guard false');
    //       return false;
    //     }
    //   })
    // );
  }
}
