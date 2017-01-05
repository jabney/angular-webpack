import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'version-child',
  template: `
    <h3>Version {{major}}.{{minor}}</h3>
    <h4>Change Log</h4>
    <ul>
      <li *ngFor="let change of changelog">{{change}}</li>
    </ul>
  `
})
export class VersionChildComponent implements OnChanges{
  @Input() major: number;
  @Input() minor: number;
  changelog: string[] = [];

  ngOnChanges(changes: {[propKey:string]: SimpleChange}) {
    let log: string[] = [];

    for (let propName in changes) {
      let changedProp = changes[propName];
      let from = JSON.stringify(changedProp.previousValue);
      let to = JSON.stringify(changedProp.currentValue);
      log.push(`${propName} changed from ${from} to ${to}`);
    }

    this.changelog.push(log.join(', '));
  }
}