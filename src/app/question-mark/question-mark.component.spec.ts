import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMarkComponent } from './question-mark.component';

describe('QuestionMarkComponent', () => {
  let component: QuestionMarkComponent;
  let fixture: ComponentFixture<QuestionMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
