import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingsTwoPage } from './settings-two.page';

describe('SettingsTwoPage', () => {
  let component: SettingsTwoPage;
  let fixture: ComponentFixture<SettingsTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
