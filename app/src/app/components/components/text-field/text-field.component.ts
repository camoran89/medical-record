import { AfterContentInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { v4 as uuidv4 } from 'uuid';

import { Base } from '../../models/base';

import { Global } from '../../../global';

@Component({
  selector: 'text-field',
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldComponent),
      multi: true
    }
  ]
})
export class TextFieldComponent implements ControlValueAccessor, AfterContentInit {

  @ViewChild('TextField')
  textField!: ElementRef;

  @Input()
  base!: Base;

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

  onInput(event: Event): void {
    this.wasStrated = true;
    this.base.value = this.textField.nativeElement.value;

    this.checkError();
  }

  private checkError(): void {
    if (this.base.value.length == 0) {
      this.hasError = true;
      this.err = `El campo ${this.base.label.toUpperCase()} es requerido.`;
      this.showPopup = true;
    } else {
      this.hasError = false;
      this.err = "";
      this.showPopup = false;
    }

    if (this.showPopup) {
      setTimeout(() => {
        this.showPopup = false;
      }, Global.popup.delay);
    }
  }

  private emitError(): void {
    this.error.emit(this.hasError);
  }
}
