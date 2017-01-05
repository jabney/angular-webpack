import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HeroParentComponent } from './hero-parent.component';
import { HeroChildComponent } from './hero-child.component';

import { NameParentComponent } from './name-parent.component';
import { NameChildComponent } from './name-child.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    HeroParentComponent,
    HeroChildComponent,
    NameParentComponent,
    NameChildComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
