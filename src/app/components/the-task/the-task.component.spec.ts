import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheTaskComponent } from './the-task.component';

describe('TheTaskComponent', () => {
  let component: TheTaskComponent;
  let fixture: ComponentFixture<TheTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
