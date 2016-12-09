import { Component } from '@angular/core';

// This causes webpack to make styles.css part of the bundle,
// and injects it into the output dist/index.html.
import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}