import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileOnePage } from './profile-one.page';

describe('ProfileOnePage', () => {
  let component: ProfileOnePage;
  let fixture: ComponentFixture<ProfileOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
