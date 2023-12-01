import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from "../components/components/components.module";

import { Base } from '../components/models/base';

@Component({
  selector: 'app-test',
  standalone: true,
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  imports: [CommonModule, ComponentsModule]
})
export class TestComponent implements OnInit {

  nameBase: Base;
  phoneBase: Base;
  emailBase: Base;

  constructor() {
    this.nameBase = new Base();
    this.phoneBase = new Base();
    this.emailBase = new Base();
  }

  ngOnInit(): void {
    this.nameBase.label = "Nombre";
    this.nameBase.format = "only-char";

    this.phoneBase.label = "Teléfono";
    this.phoneBase.format = "phone";

    this.emailBase.label = "Correo electrónico";
    this.emailBase.format = "email";
  }
}
