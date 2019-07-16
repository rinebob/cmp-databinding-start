import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './shared/highlight.directive';
import { BetterHighlightDirective } from './shared/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerElementComponent,
    CockpitComponent,
    DirectivesComponent,

    HighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
