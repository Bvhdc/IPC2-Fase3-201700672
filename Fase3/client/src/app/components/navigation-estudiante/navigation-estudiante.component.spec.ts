import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationEstudianteComponent } from './navigation-estudiante.component';

describe('NavigationEstudianteComponent', () => {
  let component: NavigationEstudianteComponent;
  let fixture: ComponentFixture<NavigationEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
