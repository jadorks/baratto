import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingsThreePage } from './settings-three.page';

describe('SettingsThreePage', () => {
  let component: SettingsThreePage;
  let fixture: ComponentFixture<SettingsThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
