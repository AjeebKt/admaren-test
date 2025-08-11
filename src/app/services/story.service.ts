import { Injectable } from '@angular/core';

export interface Story {
  name: string;
  points: number;
  description?: string;
}

@Injectable({ providedIn: 'root' })
export class StoryService {
  private stories: Story[] = [
    { name: 'Story one', points: 32, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
    { name: 'Story two', points: 8, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
    { name: 'Story three', points: 5, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
    { name: 'Story four', points: 32, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
    { name: 'Story five', points: 8, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
    { name: 'Story six', points: 5, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
  ];
  private selectedStories: Story[] = [];
  private sprintCapacity = 0;

  getStories(): Story[] {
    return [...this.stories];
  }

  addStory(story: Story): boolean {
    if (this.stories.some(s => s.name.toLowerCase() === story.name.toLowerCase())) {
      return false;
    }
    this.stories.push(story);
    return true;
  }

  clearStories(): void {
    this.stories = [];
    this.selectedStories = [];
  }

  setSprintCapacity(capacity: number): void {
    this.sprintCapacity = capacity;
  }

  getSprintCapacity(): number {
    return this.sprintCapacity;
  }

  generateSprint(): void {
    this.selectedStories = this.selectStoriesForSprint();
  }

  clearSelectedStories(): void {
    this.selectedStories = [];
  }

  getSelectedStories(): Story[] {
    return [...this.selectedStories];
  }

  private selectStoriesForSprint(): Story[] {
    // Greedy algorithm: select stories until capacity is reached
    const sorted = [...this.stories].sort((a, b) => a.points - b.points);
    const selected: Story[] = [];
    let total = 0;
    for (const story of sorted) {
      if (total + story.points <= this.sprintCapacity) {
        selected.push(story);
        total += story.points;
      }
    }
    return selected;
  }
}
