import { Injectable, EventEmitter } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PromotionService} from './services/promotion.service';

@Injectable({
  providedIn: 'root'
})
export class FormGuardGuard implements CanActivate {
  public onPathChange = new EventEmitter();
  constructor( private promSvc: PromotionService ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean | UrlTree {

    if (next.routeConfig.path === '1') {
      this.onPathChange.emit(next.routeConfig.path);
      return true;
    }

    if (this.promSvc.active) {
      this.onPathChange.emit(next.routeConfig.path);
      return true;
    } else {
      return false;
    }
  }
}
