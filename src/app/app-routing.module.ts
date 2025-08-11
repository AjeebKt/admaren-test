import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryFormComponent } from './components/story-form/story-form.component';
import { StoryListComponent } from './components/story-list/story-list.component';
import { SprintCalculatorFormComponent } from './components/sprint-calculator-form/sprint-calculator-form.component';
import { AutoSelectedSprintComponent } from './components/auto-selected-sprint/auto-selected-sprint.component';

const routes: Routes = [
  { path: 'story-form', component: StoryFormComponent },
  { path: 'story-list', component: StoryListComponent },
  { path: 'sprint-calculator', component: SprintCalculatorFormComponent },
  { path: 'auto-selected-sprint', component: AutoSelectedSprintComponent },
  { path: '', redirectTo: '/story-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
