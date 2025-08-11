import { Component } from '@angular/core';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.scss']
})
export class StoryFormComponent {
  storyName = '';
  storyPoints: number | null = null;
  description = '';
  error = '';

  constructor(private storyService: StoryService) {}

  addStory() {
    if (!this.storyName || this.storyPoints === null || this.storyPoints < 1 || !this.description) {
      this.error = 'Please enter a valid name, points, and description.';
      return;
    }
    const success = this.storyService.addStory({ name: this.storyName.trim(), points: this.storyPoints, description: this.description.trim() });
    if (!success) {
      this.error = 'Story name must be unique.';
      return;
    }
    this.storyName = '';
    this.storyPoints = null;
    this.description = '';
    this.error = '';
  }
}
