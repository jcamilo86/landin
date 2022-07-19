import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenComponent } from './presen.component';

describe('PresenComponent', () => {
  let component: PresenComponent;
  let fixture: ComponentFixture<PresenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
