import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridbannersComponent } from './gridbanners.component';

describe('GridbannersComponent', () => {
  let component: GridbannersComponent;
  let fixture: ComponentFixture<GridbannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridbannersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridbannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
