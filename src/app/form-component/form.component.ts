import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { IPromotionForm, Portal, PromotionType } from '../../models/IPromotionForm';
import { PromotionService} from '../services/promotion.service';
import {DraftService} from '../services/draft.service';

interface IPromotionFormExtends extends Omit<IPromotionForm, 'portal' | 'type'>{
  portal: Portal | '';
  type: PromotionType | '';
}

@Component({
  selector: 'app-form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  promotion = new FormGroup({
    description: new FormGroup({
      marketingName: new FormControl('', Validators.required),
      technicalName: new FormControl(''),
      description: new FormControl(''),
    }),
    conditions: new FormGroup({
      portal: new FormControl('',  Validators.required),
      type: new FormControl('',  Validators.required),
      benefitAmount: new FormControl(),
      startDate: new FormControl('',  Validators.required),
      finishDate: new FormControl(''),
      price: new FormControl(false),
      connectWithOther: new FormControl(false),
      backPromotion: new FormControl(false)
    })
  });

  constructor(
    private promSvc: PromotionService,
    private draftSvc: DraftService
  ) {
    Object.keys(this.promotion.value)?.map(key => {
      const prevPromotion = this.draftSvc.getDraft(key);
      if (prevPromotion) {
        Object.keys(prevPromotion)?.map((prop: string) => {
          if (prevPromotion[prop]) {
            this.promotion.get(key)?.get(prop)?.setValue(prevPromotion[prop]);
          }
        });
      }
    });
  }

  ngOnInit(): void {
    this.promotion.get('description')
      ?.valueChanges.subscribe((value) => this.enableRouting(value));
    this.promotion.get('conditions').get('connectWithOther')
      .valueChanges.subscribe(value => this.enableBonus(value));
    this.enableRouting(this.promotion.value.description);
    this.enableBonus(this.promotion.value.conditions.connectWithOther);
  }

  enableRouting(value: any): void {
    if (value.marketingName?.length > 0 || value.technicalName?.length > 0) {
      this.promSvc.activeChange(true);
    } else {
      this.promSvc.activeChange(false);
    }
  }

  enableBonus(value: any): void {
    this.promSvc.bonusChange(value);
  }
}

function isIPromotionForm(object: any): object is IPromotionForm {
  return (
    Object.values(Portal).includes(object.portal) &&
    Object.values(PromotionType).includes(object.type)
  );
}
