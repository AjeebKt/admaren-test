import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoSelectedSprintComponent } from './auto-selected-sprint.component';

describe('AutoSelectedSprintComponent', () => {
	let component: AutoSelectedSprintComponent;
	let fixture: ComponentFixture<AutoSelectedSprintComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AutoSelectedSprintComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(AutoSelectedSprintComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should add multiple stories with specific points', () => {
		const stories = [
			{ name: 'Login Feature', points: 2, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
			{ name: 'Dashboard Feature', points: 3, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
			{ name: 'API Integration', points: 5, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
			{ name: 'UI Design', points: 6, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
			{ name: 'Database Setup', points: 9, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' }
		];

		stories.forEach(story => {
			component.addStory(story.name, story.points, story.description);
		});

		const expectedStories = [
			{ name: 'Login Feature', points: 2, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
			{ name: 'Dashboard Feature', points: 3, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
			{ name: 'API Integration', points: 5, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
			{ name: 'UI Design', points: 6, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
			{ name: 'Database Setup', points: 9, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' }
		];

		expect(component.stories).toEqual(expectedStories);
	});
});