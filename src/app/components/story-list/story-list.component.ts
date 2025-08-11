import { Component, OnInit } from '@angular/core';
import { StoryService, Story } from '../../services/story.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent implements OnInit {
  constructor(public storyService: StoryService) {}

  ngOnInit() {
    console.log('Fetched stories:', this.stories);
  }

  get stories(): Story[] {
    return this.storyService.getStories();
  }
}
