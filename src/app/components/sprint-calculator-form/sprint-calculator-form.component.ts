import { Component } from '@angular/core';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-sprint-calculator-form',
  templateUrl: './sprint-calculator-form.component.html',
  styleUrls: ['./sprint-calculator-form.component.scss']
})
export class SprintCalculatorFormComponent {
  sprintCapacity: number | null = null;
  error = '';

  constructor(private storyService: StoryService) {}

  setCapacity() {
    if (this.sprintCapacity === null || this.sprintCapacity < 1) {
      this.error = 'Please enter a valid sprint capacity.';
      return;
    }
    this.storyService.setSprintCapacity(this.sprintCapacity);
    this.error = '';
  }

  generateSprint() {
    this.setCapacity();
    if (!this.error) {
      this.storyService.generateSprint();
    }
  }

  clearStories() {
    this.storyService.clearStories();
  }

  clearSelectedStories() {
    this.storyService.clearSelectedStories();
  }
}
