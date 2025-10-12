import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Gym1 } from './gym-1/gym-1';
import { Gym2 } from './gym-2/gym-2';
import { Gym3 } from './gym-3/gym-3';
import { Gym4 } from './gym-4/gym-4';
import { Gym5 } from './gym-5/gym-5';
import { Gym6 } from './gym-6/gym-6';
import { Gym7 } from './gym-7/gym-7';
import { Gym8 } from './gym-8/gym-8';
import { Home } from './home/home';
import { TrainerForm } from './trainer-form/trainer-form';
import { TrainerList } from './trainer-list/trainer-list';

const routes: Routes = [
  {path: '', component: Home, pathMatch: 'full'},
  {path: 'gym-1', component: Gym1},
  {path: 'gym-2', component: Gym2},
  {path: 'gym-3', component: Gym3},
  {path: 'gym-4', component: Gym4},
  {path: 'gym-5', component: Gym5},
  {path: 'gym-6', component: Gym6},
  {path: 'gym-7', component: Gym7},
  {path: 'gym-8', component: Gym8},
  {path: 'trainer-form', component: TrainerForm},
  {path: 'trainer-list', component: TrainerList}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
