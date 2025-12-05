import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logoinhome } from './logoinhome';

describe('Logoinhome', () => {
  let component: Logoinhome;
  let fixture: ComponentFixture<Logoinhome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logoinhome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logoinhome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
