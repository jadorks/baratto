import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignThreePage } from './sign-three.page';

describe('SignThreePage', () => {
  let component: SignThreePage;
  let fixture: ComponentFixture<SignThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
