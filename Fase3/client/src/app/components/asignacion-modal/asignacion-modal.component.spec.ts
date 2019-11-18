import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionModalComponent } from './asignacion-modal.component';

describe('AsignacionModalComponent', () => {
  let component: AsignacionModalComponent;
  let fixture: ComponentFixture<AsignacionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
