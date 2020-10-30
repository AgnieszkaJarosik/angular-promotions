import { Component, OnInit } from '@angular/core';
import {ControlContainer} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {
  public formGroup;

  constructor(
    public controlContainer: ControlContainer,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.controlContainer.control;

  }

}
