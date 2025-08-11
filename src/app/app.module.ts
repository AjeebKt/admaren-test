import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryFormComponent } from './components/story-form/story-form.component';
import { StoryListComponent } from './components/story-list/story-list.component';
import { SprintCalculatorFormComponent } from './components/sprint-calculator-form/sprint-calculator-form.component';
import { AutoSelectedSprintComponent } from './components/auto-selected-sprint/auto-selected-sprint.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StoryFormComponent,
    StoryListComponent,
    SprintCalculatorFormComponent,
    AutoSelectedSprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
