import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';
import { AwesomePipe } from './contact/awesome.pipe';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact/contact.service';

import {
  HighlightDirective as ContactHighlightDirective
} from './contact/highlight.directive';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,

    AwesomePipe,
    ContactComponent,
    ContactHighlightDirective,
  ],
  providers: [ UserService, ContactService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
