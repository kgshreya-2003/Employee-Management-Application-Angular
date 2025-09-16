import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Employee, Employees } from './employee/employee';

import { Home } from './home/home';

export const routes: Routes = [  
  { path: '',component:Home},              
  { path:'Employees', component:Employees},
  { path: '**', redirectTo: '', pathMatch: 'full' }, // fallback redirect to home
];

@Component({
  selector: 'app-root',
  standalone: true,
 imports: [RouterOutlet, Navbar],

  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Library');
}
