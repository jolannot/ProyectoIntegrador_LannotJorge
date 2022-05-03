import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraSupComponent } from './barra-sup.component';

describe('BarraSupComponent', () => {
  let component: BarraSupComponent;
  let fixture: ComponentFixture<BarraSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraSupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
