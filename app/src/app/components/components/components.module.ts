import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { InputFieldComponent } from './input-field/input-field.component';
import { SelectFieldComponent } from './select-field/select-field.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    InputFieldComponent,
    SelectFieldComponent,
    TextFieldComponent,
    PopupComponent
  ], imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    MatSelectModule
  ], exports: [
    InputFieldComponent,
    SelectFieldComponent,
    TextFieldComponent,
    PopupComponent
  ]
})
export class ComponentsModule { }
