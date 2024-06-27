import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlojamientosComponent } from './home-alojamientos.component';

describe('HomeAlojamientosComponent', () => {
  let component: HomeAlojamientosComponent;
  let fixture: ComponentFixture<HomeAlojamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAlojamientosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeAlojamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
