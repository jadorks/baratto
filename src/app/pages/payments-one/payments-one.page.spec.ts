import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentsOnePage } from './payments-one.page';

describe('PaymentsOnePage', () => {
  let component: PaymentsOnePage;
  let fixture: ComponentFixture<PaymentsOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentsOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
