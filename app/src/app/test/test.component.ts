import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from "../components/components/components.module";

import { Base, Select } from '../components/models/base';

@Component({
  selector: 'app-test',
  standalone: true,
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  imports: [CommonModule, ComponentsModule]
})
export class TestComponent implements OnInit {

  nameBase: Base;
  typeBase: Select<string>;
  idBase: Base;
  phoneBase: Base;
  emailBase: Base;
  commentsBase: Base;
  usernameBase: Base;
  passwordBase: Base;

  constructor() {
    this.nameBase = new Base();
    this.typeBase = new Select<string>();
    this.idBase = new Base();
    this.phoneBase = new Base();
    this.emailBase = new Base();
    this.commentsBase = new Base();
    this.usernameBase = new Base();
    this.passwordBase = new Base();
  }

  ngOnInit(): void {
    this.nameBase.label = "Nombre";
    this.nameBase.format = "only-char";
    this.nameBase.required = true;

    this.typeBase.label = "Tipo de documento de identidad";
    this.typeBase.items = ['CC', 'CE', 'TI'];
    this.typeBase.required = true;

    this.idBase.label = "Número de documento de identidad";
    this.idBase.format = "document-number";

    this.phoneBase.label = "Teléfono";
    this.phoneBase.format = "phone";

    this.emailBase.label = "Correo electrónico";
    this.emailBase.format = "email";

    this.commentsBase.label = "Comentarios";

    this.usernameBase.label = "Usuario";
    this.usernameBase.format = "username";

    this.passwordBase.label = "Contraseña";
    this.passwordBase.format = "password";
  }
}
