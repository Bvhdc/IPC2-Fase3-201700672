import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuxTabsPage } from './aux-tabs.page';

describe('AuxTabsPage', () => {
  let component: AuxTabsPage;
  let fixture: ComponentFixture<AuxTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuxTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
