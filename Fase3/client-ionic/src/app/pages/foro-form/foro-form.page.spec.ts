import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForoFormPage } from './foro-form.page';

describe('ForoFormPage', () => {
  let component: ForoFormPage;
  let fixture: ComponentFixture<ForoFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForoFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
