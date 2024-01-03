import { Component } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'TimerApp';

  minutes: number = 5;
  seconds: number = 0;

  private intervalId: any;

  startTimer() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        if (this.minutes === 0 && this.seconds === 0) {
          this.pauseTimer();
        } else {
          this.updateTimer(-1);
        }
      }, 1000);
    }
  }

  pauseTimer() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resumeTimer() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        if (this.minutes === 0 && this.seconds === 0) {
          this.pauseTimer();
        } else {
          this.updateTimer(-1);
        }
      }, 1000);
    }
  }

  resetTimer() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.minutes = 5;
    this.seconds = 0;
  }

  private updateTimer(byValue: number) {
    const totalSeconds = this.minutes * 60 + this.seconds + byValue;
    this.minutes = Math.floor(totalSeconds / 60);
    this.seconds = totalSeconds % 60;
  }
}
