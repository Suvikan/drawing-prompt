import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysteryPromptComponent } from './mystery-prompt.component';

describe('MysteryPromptComponent', () => {
  let component: MysteryPromptComponent;
  let fixture: ComponentFixture<MysteryPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysteryPromptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysteryPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
