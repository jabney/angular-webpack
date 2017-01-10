import { Component, Input, OnDestroy } from '@angular/core';
import { MissionService } from './mission.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'my-astronaut',
  template: `
    <p>
      {{astronaut}}: <strong>Mission</strong>
      <button
        (click)="confirm()"
        [disabled]="!announced || confirmed">
        confirm
        </button>
    </p>
  `
})
export class AstronautComponent implements OnDestroy {

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}