import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginOnePage } from './login-one.page';

describe('LoginOnePage', () => {
  let component: LoginOnePage;
  let fixture: ComponentFixture<LoginOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
