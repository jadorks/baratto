import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalSubscribePage } from './modal-subscribe.page';

describe('ModalSubscribePage', () => {
  let component: ModalSubscribePage;
  let fixture: ComponentFixture<ModalSubscribePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSubscribePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSubscribePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
