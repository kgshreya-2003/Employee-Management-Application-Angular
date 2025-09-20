import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Employee {
  id: number;
  name: string;
  department: string;
  email: string;
  salary: number;
}

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, NgIf],
  templateUrl: './employee.html',
  styleUrls: ['./employee.css']
})
export class Employees {
  employees: Employee[] = [
  
  ];

  newEmployee: Employee = { id: 0, name: '', department: '', email: '', salary: 0 };
  editMode = false;

  // Controls the modal/dialog visibility and what content to show
  isDialogOpen = false;
  dialogMode: 'form' | 'directory' | null = null;

  openForm() {
    this.dialogMode = 'form';
    this.isDialogOpen = true;
    this.resetForm();
  }

  openDirectory() {
    this.dialogMode = 'directory';
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
    this.dialogMode = null;
  }

  addEmployee() {
    if (!this.newEmployee.name.trim()) return;
    if (this.editMode) {
      this.updateEmployee();
      return;
    }
    this.newEmployee.id = this.employees.length > 0 ? Math.max(...this.employees.map(e => e.id)) + 1 : 1;
    this.employees.push({ ...this.newEmployee });
    this.resetForm();
    this.closeDialog();
  }

  editEmployee(emp: Employee) {
    this.newEmployee = { ...emp };
    this.editMode = true;
    this.dialogMode = 'form';
    this.isDialogOpen = true;
  }

  updateEmployee() {
    const idx = this.employees.findIndex(e => e.id === this.newEmployee.id);
    if (idx !== -1) {
      this.employees[idx] = { ...this.newEmployee };
    }
    this.resetForm();
    this.editMode = false;
    this.closeDialog();
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(e => e.id !== id);
  }

  resetForm() {
    this.newEmployee = { id: 0, name: '', department: '', email: '', salary: 0 };
    this.editMode = false;
  }
}

