import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PromotionListComponent} from './promotion-list/promotion-list.component';
import {FormComponent} from './form-component/form.component';
import {DefinitionComponent} from './definition/definition.component';
import {FormStepComponent} from './form-step/form-step.component';
import {SummaryComponent} from './summary/summary.component';
import {FormGuardGuard} from './form-guard.guard';
import {BonusGuard} from './bonus.guard';


const routes: Routes = [
  { path: '', redirectTo: 'form/1', pathMatch: 'full' },
  { path: 'form',
    component: FormComponent,
    children: [
      { path: '1', component: DefinitionComponent },
      { path: '2', canActivate: [FormGuardGuard], component: FormStepComponent },
      { path: '3', canActivate: [FormGuardGuard], component: FormStepComponent },
      { path: '4', canActivate: [FormGuardGuard, BonusGuard], component: FormStepComponent },
      { path: '5', canActivate: [FormGuardGuard], component: FormStepComponent },
      { path: '6', canActivate: [FormGuardGuard], component: FormStepComponent },
      { path: '7', canActivate: [FormGuardGuard], component: FormStepComponent },
      { path: '8', canActivate: [FormGuardGuard], component: FormStepComponent },
      { path: '9', canActivate: [FormGuardGuard], component: SummaryComponent },
    ]
  },
  { path: 'list', component: PromotionListComponent },
  { path: '**', redirectTo: 'form/1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
