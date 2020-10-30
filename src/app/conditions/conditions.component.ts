import {Component, OnChanges, OnInit, OnDestroy, Input} from '@angular/core';
import {portalMap, promotionMap} from '../../models/IPromotionForm';
import {ControlContainer} from '@angular/forms';
import {DraftService} from '../services/draft.service';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss']
})
export class ConditionsComponent implements OnInit, OnChanges {
  portal = Array.from(portalMap.values());
  type = Array.from(promotionMap.values());
  @Input() values;
  public parentGroup;
  public conditions;

  constructor(
    public controlContainer: ControlContainer,
    private draftSvc: DraftService
  ) {}

  ngOnInit(): void {
    this.parentGroup = this.controlContainer.control;
    this.conditions = this.parentGroup.get('conditions');
  }

  ngOnChanges(changes: any): void {
    this.draftSvc.saveDraft('conditions', changes.values.currentValue);
  }
}
