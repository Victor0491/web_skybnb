import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosbasicosComponent } from './datosbasicos.component';

describe('DatosbasicosComponent', () => {
  let component: DatosbasicosComponent;
  let fixture: ComponentFixture<DatosbasicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosbasicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosbasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
