import { AfterContentInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { v4 as uuidv4 } from 'uuid';

import { InputFieldExp as Exp } from './input-field-exp';

import { Base } from '../../models/base';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    }
  ]
})
export class InputFieldComponent implements ControlValueAccessor, AfterContentInit {

  @ViewChild('InputField')
  inputField!: ElementRef;

  @Input()
  base!: Base;

  @Output()
  error: EventEmitter<boolean>;

  hasError!: boolean;
  wasStrated!: boolean;

  err: string;
  id: string;
  regExp!: any;
  validator!: any;

  constructor() {
    this.error = new EventEmitter<boolean>();

    this.err = "";
    this.id = uuidv4();
  }

  ngAfterContentInit(): void {
    this.wasStrated = false;
    this.hasError = false;

    this.regExp = this.getExpr();
    this.validator = this.getValidator();
  }

  writeValue(value: string): void {
    this.base.value = value;
  }

  registerOnChange(fn: any): void {
    this.base.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.base.onBlur = fn;
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
    this.base.value = this.inputField.nativeElement.value;

    this.checkError();

    if (!this.validator.test(this.base.value)) {
      this.inputField.nativeElement.value = this.base.value.substring(0, this.base.value.length - 1);
      this.base.value = this.inputField.nativeElement.value;
    }

    this.onKeypress();
  }

  onKeypress(): boolean {
    return this.validator.test(this.base.value);
  }

  private checkError(): void {
    if (this.base.value.length == 0) {
      this.hasError = true;
      this.err = `El campo ${this.base.label.toUpperCase()} es requerido.`;
    } else {
      this.hasError = false;
      this.err = "";
    }

    if (this.err.length == 0) {
      if (!this.regExp.test(this.base.value)) {
        this.hasError = true;
        this.err = `El campo ${this.base.label.toUpperCase()} no cumple con el formato.`;
      } else {
        this.hasError = false;
        this.err = "";
      }
    }
  }

  private emitError(): void {
    this.error.emit(this.hasError);
  }

  private getExpr(): any {
    let exp = Exp.expressions.find(x =>
      x.key == this.base.format ||
      x.key.includes(this.base.format));

    return exp && exp.value ? new RegExp(exp.value) : null;
  }

  private getValidator(): any {
    let exp = Exp.expressions.find(x =>
      x.key == this.base.format ||
      x.key.includes(this.base.format));

    return exp && exp.validator ? new RegExp(exp.validator) : null;
  }
}
