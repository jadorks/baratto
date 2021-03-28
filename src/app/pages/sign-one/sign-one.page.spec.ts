import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignOnePage } from './sign-one.page';

describe('SignOnePage', () => {
  let component: SignOnePage;
  let fixture: ComponentFixture<SignOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
