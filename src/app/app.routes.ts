import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Employee, Employees } from './employee/employee';


export const routes: Routes = [
  { path: '', component: Employees },            // Home route shows collapsible list
  { path: '**', redirectTo: '' }                       // Fallback redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
