import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerList } from './trainer-list';

describe('TrainerList', () => {
  let component: TrainerList;
  let fixture: ComponentFixture<TrainerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainerList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
