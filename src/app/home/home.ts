import { Component } from '@angular/core';
import { Employee, Employees} from '../employee/employee';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Employees],
  template: `
    <app-employees></app-employees>
  `
})
export class Home {}
