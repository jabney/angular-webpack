import { Component } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'tabs',
  template: `
    <ul>
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <div *ngIf="true">
          {{tab.tabTitle}}
        </div>
      </li>
    </ul>
    <ng-content></ng-content>
  `,
  styles: [`
    ul {
      list-style-type:circle;
    }
    .active {
      list-style-type: disc;
      font-weight: bold;
    }
  `]
})
export class TabsComponent {
  tabs: TabComponent[] = [];

  addTab(tab:TabComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }

  selectTab(tab: TabComponent) {
    for (let tab of this.tabs) {
      tab.active = false;
    }
    tab.active = true;
  }
}
