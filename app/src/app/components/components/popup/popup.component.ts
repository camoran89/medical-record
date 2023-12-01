import { Component, Input } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {

  @Input()
  show!: boolean;

  @Input()
  message!: string;

  id: string;

  constructor() {
    this.id = uuidv4();
  }
}
