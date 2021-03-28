import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationsOnePage } from './notifications-one.page';

describe('NotificationsOnePage', () => {
  let component: NotificationsOnePage;
  let fixture: ComponentFixture<NotificationsOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationsOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
