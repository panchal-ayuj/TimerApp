import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isRunning: boolean = false;

  @Output() startEvent = new EventEmitter<void>();
  @Output() pauseEvent = new EventEmitter<void>();
  @Output() resumeEvent = new EventEmitter<void>();
  @Output() resetEvent = new EventEmitter<void>();
  resumerTimer: boolean = false;


  start() {
    if(!this.resumerTimer) {
      this.isRunning = true;
      this.startEvent.emit();
    }
  }

  pause() {
    this.isRunning = false;
    this.pauseEvent.emit();
    this.resumerTimer = true;
  }

  resume() {
    if(this.resumerTimer){
      this.isRunning = true;
      this.resumeEvent.emit();
      this.resumerTimer = false;
    }
  }

  reset() {
    this.isRunning = false;
    this.resetEvent.emit();
    this.resumerTimer = false;
  }
}
