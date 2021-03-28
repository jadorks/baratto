import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginTwoPage } from './login-two.page';

describe('LoginTwoPage', () => {
  let component: LoginTwoPage;
  let fixture: ComponentFixture<LoginTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
