import { Component } from '@angular/core';
import { StoryService, Story } from '../../services/story.service';

@Component({
  selector: 'app-auto-selected-sprint',
  templateUrl: './auto-selected-sprint.component.html',
  styleUrls: ['./auto-selected-sprint.component.scss']
})
export class AutoSelectedSprintComponent {
  constructor(public storyService: StoryService) {}

  get selectedStories(): Story[] {
    return this.storyService.getSelectedStories();
  }

  get totalPoints(): number {
    return this.selectedStories.reduce((sum, s) => sum + s.points, 0);
  }

  get sprintCapacity(): number {
    return this.storyService.getSprintCapacity();
  }
}
