import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderproductsComponent } from './renderproducts.component';

describe('RenderproductsComponent', () => {
  let component: RenderproductsComponent;
  let fixture: ComponentFixture<RenderproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
