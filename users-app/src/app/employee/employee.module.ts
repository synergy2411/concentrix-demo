import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

@NgModule({
    imports :       [ CommonModule ],
    providers :     [],
    declarations :  [ NewEmployeeComponent],
    // exports :       [ NewEmployeeComponent]      
})
export class EmployeeModule{}