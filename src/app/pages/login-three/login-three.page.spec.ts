import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginThreePage } from './login-three.page';

describe('LoginThreePage', () => {
  let component: LoginThreePage;
  let fixture: ComponentFixture<LoginThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
