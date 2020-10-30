import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form-step',
  templateUrl: './form-step.component.html',
  styleUrls: ['./form-step.component.scss']
})
export class FormStepComponent implements OnInit {
  public id;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe((value => this.id = value[0].path));
  }

}
