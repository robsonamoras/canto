import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() public btnTitle!: string;
  @Input() public btnClass!: string;
  @Input() public btnDisabled!: boolean;
  @Input() public btnType: string = 'button';
  @Output() public btnClick = new EventEmitter();

  constructor() {}

  ngOnInit() {
    if (this.btnClass) {
      switch (this.btnClass.toLowerCase()) {
        case 'yellow-right': {
          this.btnClass = 'btn btn-canto-primary pull-right';
          break;
        }
        case 'yellow-left': {
          this.btnClass = 'btn btn-canto-primary pull-left';
          break;
        }
        case 'yellow-secondary-right': {
          this.btnClass = 'btn btn-canto-yellow-secondary pull-right';
          break;
        }
        case 'yellow-secondary-left': {
          this.btnClass = 'btn btn-canto-yellow-secondary pull-left';
          break;
        }
        case 'default-right': {
          this.btnClass = 'btn btn-default pull-right';
          break;
        }
        case 'default-left': {
          this.btnClass = 'btn btn-default pull-left';
          break;
        }
        case 'white-right': {
          this.btnClass = 'btn btn-canto-secondary pull-right';
          break;
        }
        case 'white-right': {
          this.btnClass = 'btn btn-canto-secondary pull-left';
          break;
        }
      }
    }
  }
}
