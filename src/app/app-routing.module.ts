import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: 'form',
    component: FormComponent
  },
  {
    path:'events',
    component: EventsComponent
  },
  {
    path:'',
    component: EventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
