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
			{ name: 'Login Feature', points: 2 },
			{ name: 'Dashboard Feature', points: 3 },
			{ name: 'API Integration', points: 5 },
			{ name: 'UI Design', points: 6 },
			{ name: 'Database Setup', points: 9 }
		];

		stories.forEach(story => {
			component.addStory(story.name, story.points);
		});

		const expectedStories = [
			{ name: 'Login Feature', points: 2 },
			{ name: 'Dashboard Feature', points: 3 },
			{ name: 'API Integration', points: 5 },
			{ name: 'UI Design', points: 6 },
			{ name: 'Database Setup', points: 9 }
		];

		expect(component.stories).toEqual(expectedStories);
	});
});