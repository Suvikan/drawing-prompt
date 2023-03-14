import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { IdeaPromptComponent } from './idea-prompt/idea-prompt.component';
import { ColorPromptComponent } from './color-prompt/color-prompt.component';
import { MysteryPromptComponent } from './mystery-prompt/mystery-prompt.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IdeaPromptComponent,
    ColorPromptComponent,
    MysteryPromptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
