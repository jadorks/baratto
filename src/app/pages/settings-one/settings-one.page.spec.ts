import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingsOnePage } from './settings-one.page';

describe('SettingsOnePage', () => {
  let component: SettingsOnePage;
  let fixture: ComponentFixture<SettingsOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
