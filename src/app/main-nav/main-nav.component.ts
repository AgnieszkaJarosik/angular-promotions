import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PromotionService} from '../services/promotion.service';
import {FormGuardGuard} from '../form-guard.guard';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  public activeId;
  public routesActive;
  public bonusActive;
  public navList = [
    {name: 'Definition', nr: 1, inactive: false},
    {name: 'Choose products', nr: 2, inactive: false},
    {name: 'Exclude products', nr: 3, inactive: false},
    {name: 'Bonus products', nr: 4, inactive: true},
    {name: 'Products limits', nr: 5, inactive: false},
    {name: 'Choose clients', nr: 6, inactive: false},
    {name: 'Exclude clients', nr: 7, inactive: false},
    {name: 'Clients limits', nr: 8, inactive: false},
    {name: 'Summary', nr: 9, inactive: false}
  ];

  constructor(
    private route: ActivatedRoute,
    private promSvc: PromotionService,
    private formGuard: FormGuardGuard
  ) { }

  ngOnInit(): void {
    this.activeId = 1;
    this.routesActive = this.promSvc.active;
    this.bonusActive = this.promSvc.bonus;
    this.formGuard.onPathChange.subscribe(value => this.activeId = Number(value));
    this.promSvc.onActiveChange.subscribe(value => this.routesActive = value);
    this.promSvc.onBonusChange.subscribe(value => this.bonusActive = value);
  }
}
