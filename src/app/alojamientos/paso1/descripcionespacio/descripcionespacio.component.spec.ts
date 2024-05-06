import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionespacioComponent } from './descripcionespacio.component';

describe('DescripcionespacioComponent', () => {
  let component: DescripcionespacioComponent;
  let fixture: ComponentFixture<DescripcionespacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescripcionespacioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescripcionespacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
