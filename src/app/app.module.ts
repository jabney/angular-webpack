import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HeroParentComponent } from './hero-parent.component';
import { HeroChildComponent } from './hero-child.component';

import { NameParentComponent } from './name-parent.component';
import { NameChildComponent } from './name-child.component';

import { VersionParentComponent } from './version-parent.component';
import { VersionChildComponent } from './version-child.component';

import { VoterComponent } from './voter.component';
import { VoteTakerComponent } from './vote-taker.component';

import { CountdownTimerComponent } from './countdown-timer.component';
import { CountdownLocalVariableParentComponent } from './countdown-lv-parent.component';
import { CountdownViewChildParentComponent } from './countdown-vc-parent.component';

import { MissionControlComponent } from './mission-control.component';
import { MissionService } from './mission.service';
import { AstronautComponent } from './astronaut.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    AstronautComponent,
    CountdownLocalVariableParentComponent,
    CountdownViewChildParentComponent,
    CountdownTimerComponent,
    HeroParentComponent,
    HeroChildComponent,
    MissionControlComponent,
    NameParentComponent,
    NameChildComponent,
    VersionParentComponent,
    VersionChildComponent,
    VoterComponent,
    VoteTakerComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
