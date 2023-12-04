import { AfterContentInit, Component, EventEmitter, Input, Output, ViewChild, forwardRef } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelect } from '@angular/material/select';

import { v4 as uuidv4 } from 'uuid';

import { Select } from '../../models/base';

import { Global } from '../../../global';

@Component({
  selector: 'select-field',
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectFieldComponent),
      multi: true
    }
  ]
})
export class SelectFieldComponent<T> implements ControlValueAccessor, AfterContentInit {

  @ViewChild('SelectField')
  selectField!: MatSelect;

  @Input()
  base!: Select<T>;

  @Output()
  error: EventEmitter<boolean>;

  hasError!: boolean;
  showPopup!: boolean;
  wasStrated!: boolean;

  err: string;
  id: string;

  onTouched!: () => void;
  onChange!: (value: string) => void;

  constructor() {
    this.error = new EventEmitter<boolean>();

    this.err = "";
    this.id = uuidv4();
  }

  ngAfterContentInit(): void {
    this.wasStrated = false;
    this.hasError = false;
  }

  writeValue(value: string): void {
    this.base.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(disabled: boolean): void {
    this.base.disabled = disabled;
  }

  onFocus(): void {
    this.emitError();
  }

  onBlur(): void {
    this.checkError();
    this.emitError();
  }

  onValueChange(): void {
    this.wasStrated = true;
    this.base.selected = this.selectField.value;

    this.checkError();
  }

  private checkError(): void {
    let value: any = this.base.selected;
    if (value.length == 0) {
      this.hasError = true;
      this.err = `El campo ${this.base.label.toUpperCase()} es requerido.`;
      this.showPopup = true;

      setTimeout(() => {
        this.showPopup = false;
      }, Global.popup.delay);
    } else {
      this.hasError = false;
      this.showPopup = false;
      this.err = "";
    }
  }

  private emitError(): void {
    this.error.emit(this.hasError);
  }
}
