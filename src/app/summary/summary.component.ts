import { Component, OnInit } from '@angular/core';
import {ControlContainer} from '@angular/forms';
import {Router} from '@angular/router';
import {PromotionService} from '../services/promotion.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  public formGroup;

  constructor(
    public controlContainer: ControlContainer,
    private router: Router,
    private promotionSvc: PromotionService
    ) { }

  ngOnInit(): void {
    this.formGroup = this.controlContainer.control;
  }

  handleSubmit(e: any): void {
    this.promotionSvc.savePromotion(this.formGroup.value);
    this.router.navigate(['../../list']);
  }

  handleReset(): void {
    this.router.navigate(['../1']);
  }

}
