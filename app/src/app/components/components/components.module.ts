import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputFieldComponent } from './input-field/input-field.component';
import { SelectFieldComponent } from './select-field/select-field.component';
import { TextFieldComponent } from './text-field/text-field.component';

@NgModule({
  declarations: [
    InputFieldComponent,
    SelectFieldComponent,
    TextFieldComponent
  ], imports: [
    CommonModule
  ], exports: [
    InputFieldComponent,
    SelectFieldComponent,
    TextFieldComponent
  ]
})
export class ComponentsModule { }
