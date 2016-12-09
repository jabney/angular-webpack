import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  // Apparently webpack has an issue with modueId: module.id.
  // https://angular.io/docs/ts/latest/cookbook/component-relative-paths.html#!#webpack
  // moduleId: module.id,
  selector: 'my-dashboard',
  // With webpack, we can use the './' prefix to resolve template paths.
  // (See above module.id note and link.)
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  // private heroService: HeroService;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
