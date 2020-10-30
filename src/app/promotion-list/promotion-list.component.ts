import { Component, OnInit } from '@angular/core';
import {PromotionService} from '../services/promotion.service';
import {DraftService} from '../services/draft.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss']
})
export class PromotionListComponent implements OnInit {
  public promotions;

  constructor(
    private promotionSvc: PromotionService,
    private draftSvc: DraftService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.promotions = this.promotionSvc.getPromotions();
    this.promotionSvc.onPromotionsChange.subscribe( value => {
      console.log(value);
      this.promotions = value;
    })
    console.log(this.promotions)
  }

  deletePromotion(promotion): void {
    this.promotionSvc.deletePromotion(promotion);
  }

  editPromotion(promotion): void {
    this.draftSvc.saveDraft('description', promotion.description);
    this.draftSvc.saveDraft('conditions', promotion.conditions);
    this.router.navigate(['../form/1']);
  }

}
