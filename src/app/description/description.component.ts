import {Component, OnChanges, OnInit, Input} from '@angular/core';
import {ControlContainer} from '@angular/forms';
import {DraftService} from '../services/draft.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit, OnChanges {
  public parentGroup;
  public description;
  @Input() values;

  constructor(
    public controlContainer: ControlContainer,
    private draftSvc: DraftService
  ) { }

  ngOnInit(): void {
    this.parentGroup = this.controlContainer.control;
    this.description = this.parentGroup.get('description');
  }

  ngOnChanges(changes: any): any {
    this.draftSvc.saveDraft('description', changes.values.currentValue);
  }

}
