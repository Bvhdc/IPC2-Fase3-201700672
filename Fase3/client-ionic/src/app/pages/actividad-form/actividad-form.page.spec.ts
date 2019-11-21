import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActividadFormPage } from './actividad-form.page';

describe('ActividadFormPage', () => {
  let component: ActividadFormPage;
  let fixture: ComponentFixture<ActividadFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActividadFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
