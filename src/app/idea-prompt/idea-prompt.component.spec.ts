import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaPromptComponent } from './idea-prompt.component';

describe('IdeaPromptComponent', () => {
  let component: IdeaPromptComponent;
  let fixture: ComponentFixture<IdeaPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaPromptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeaPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
