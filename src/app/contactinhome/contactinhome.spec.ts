import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactinhome } from './contactinhome';

describe('Contactinhome', () => {
  let component: Contactinhome;
  let fixture: ComponentFixture<Contactinhome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contactinhome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contactinhome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
