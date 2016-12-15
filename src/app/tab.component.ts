import { Component, Input } from '@angular/core';
import { TabsComponent } from './tabs.component';

@Component({
  selector: 'tab',
  template: `
    <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {
  @Input() tabTitle: string;
  public active: boolean;

  constructor(tabsComponent: TabsComponent) {
    tabsComponent.addTab(this);
  }
}
