import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInternComponent } from './interns-app/form-intern/form-intern.component';
import { HomeComponent } from './interns-app/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'formIntern',
    component: FormInternComponent,
  },
  {
    path: 'formIntern/:id',
    component: FormInternComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
