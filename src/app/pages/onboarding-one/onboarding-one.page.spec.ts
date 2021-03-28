import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnboardingOnePage } from './onboarding-one.page';

describe('OnboardingOnePage', () => {
  let component: OnboardingOnePage;
  let fixture: ComponentFixture<OnboardingOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnboardingOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
