import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Crisis, CrisisService } from './crisis.service';

@Component({
  template: `
    <h3 highlight>Crisis Detail</h3>
    <div *ngIf="crisis">
      <div>Id: {{crisis.id}}</div><br>
      <label>Name:
        <input [(ngModel)]="crisis.name">
      </label>
    </div>
    <br>
    <a routerLink="../list">Crisis List</a>
  `
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis;

  constructor(
    private route: ActivatedRoute,
    private crisisService: CrisisService) {  }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.params['id'], 10);
    this.crisisService.getCrisis(id).then(crisis => this.crisis = crisis);
  }
}
