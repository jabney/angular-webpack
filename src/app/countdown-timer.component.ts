import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'countdown-timer',
  template: `
    <p>{{message}}</p>
  `
})
export class CountdownTimerComponent implements OnInit, OnDestroy {

  intervalId = 0;
  message = '';
  seconds = 10;

  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        }
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }

  ngOnInit() {
    this.start();
  }

  ngOnDestroy() {
    this.clearTimer();
  }
}
