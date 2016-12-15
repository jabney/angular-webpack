import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
