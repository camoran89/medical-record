import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from "../components/components/components.module";

import { Base, Select } from '../components/models/base';
import { Table } from '../components/models/table';

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

  table: Table;

  constructor() {
    this.nameBase = new Base();
    this.typeBase = new Select<string>();
    this.idBase = new Base();
    this.phoneBase = new Base();
    this.emailBase = new Base();
    this.commentsBase = new Base();
    this.usernameBase = new Base();
    this.passwordBase = new Base();
    this.table = new Table();
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

    this.table.columns = [
      { columnDef: 'name', header: 'Name' },
      { columnDef: 'date', header: 'Date' },
      { columnDef: 'company', header: 'Company' },
      { columnDef: 'country', header: 'Country' },
      { columnDef: 'city', header: 'City' },
      { columnDef: 'phone', header: 'Phone' }
    ];

    this.table.dataset = [
      {
        "name": "Molly Pope",
        "date": "Jul 27, 2021",
        "company": "Faucibus Orci Institute",
        "country": "New Zealand",
        "city": "Campinas",
        "phone": "1-403-634-0276"
      },
      {
        "name": "Alfonso Vinson",
        "date": "May 11, 2021",
        "company": "Non Ante Corp.",
        "country": "United Kingdom",
        "city": "Redlands",
        "phone": "1-405-411-6336"
      },
      {
        "name": "Camden David",
        "date": "Aug 6, 2022",
        "company": "Cursus Et LLP",
        "country": "Nigeria",
        "city": "Iguala",
        "phone": "(415) 628-6853"
      },
      {
        "name": "Levi Goff",
        "date": "Nov 3, 2021",
        "company": "Vitae Incorporated",
        "country": "Sweden",
        "city": "Manavgat",
        "phone": "1-545-823-7985"
      },
      {
        "name": "Madaline Leach",
        "date": "Jun 13, 2022",
        "company": "Erat Volutpat Corp.",
        "country": "Chile",
        "city": "Niterói",
        "phone": "1-678-156-9674"
      },
      {
        "name": "Camden David",
        "date": "Aug 6, 2022",
        "company": "Cursus Et LLP",
        "country": "Nigeria",
        "city": "Iguala",
        "phone": "(415) 628-6853"
      },
      {
        "name": "Levi Goff",
        "date": "Nov 3, 2021",
        "company": "Vitae Incorporated",
        "country": "Sweden",
        "city": "Manavgat",
        "phone": "1-545-823-7985"
      },
      {
        "name": "Madaline Leach",
        "date": "Jun 13, 2022",
        "company": "Erat Volutpat Corp.",
        "country": "Chile",
        "city": "Niterói",
        "phone": "1-678-156-9674"
      }
    ];
  }

  onTable(event: Event): void {
    debugger;
  }
}
