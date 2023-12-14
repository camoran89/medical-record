import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';

import { InputFieldComponent } from './input-field/input-field.component';
import { SelectFieldComponent } from './select-field/select-field.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { PopupComponent } from './popup/popup.component';
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';
import { GenericTableComponent } from './generic-table/generic-table.component';

@NgModule({
    declarations: [
        InputFieldComponent,
        SelectFieldComponent,
        TextFieldComponent,
        PopupComponent,
        GenericDialogComponent,
        GenericTableComponent,
    ],
    exports: [
        InputFieldComponent,
        SelectFieldComponent,
        TextFieldComponent,
        PopupComponent,
        GenericDialogComponent,
        GenericTableComponent,
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTooltipModule,
        MatButtonModule,
        MatSelectModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatMenuModule
    ]
})
export class ComponentsModule { }
