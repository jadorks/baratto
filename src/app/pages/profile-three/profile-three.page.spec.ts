import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileThreePage } from './profile-three.page';

describe('ProfileThreePage', () => {
  let component: ProfileThreePage;
  let fixture: ComponentFixture<ProfileThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
