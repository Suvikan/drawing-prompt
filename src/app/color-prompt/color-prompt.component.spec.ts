import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPromptComponent } from './color-prompt.component';

describe('ColorPromptComponent', () => {
  let component: ColorPromptComponent;
  let fixture: ComponentFixture<ColorPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPromptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
