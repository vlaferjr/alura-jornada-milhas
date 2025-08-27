import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementoDecrementoComponent } from './incremento-decremento.component';

describe('IncrementoDecrementoComponent', () => {
  let component: IncrementoDecrementoComponent;
  let fixture: ComponentFixture<IncrementoDecrementoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementoDecrementoComponent]
    });
    fixture = TestBed.createComponent(IncrementoDecrementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
