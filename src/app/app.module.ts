import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { SummaryComponent } from './summary/summary.component';
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { QuestionMarkComponent } from './question-mark/question-mark.component';
import { FormComponent } from './form-component/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ConditionsComponent } from './conditions/conditions.component';
import { DefinitionComponent } from './definition/definition.component';
import { FormStepComponent } from './form-step/form-step.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    SummaryComponent,
    PromotionListComponent,
    MainNavComponent,
    QuestionMarkComponent,
    FormComponent,
    ConditionsComponent,
    DefinitionComponent,
    FormStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // MatRadioModule,
    // MatCheckboxModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
