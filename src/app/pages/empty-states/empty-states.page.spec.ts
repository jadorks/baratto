import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmptyStatesPage } from './empty-states.page';

describe('EmptyStatesPage', () => {
  let component: EmptyStatesPage;
  let fixture: ComponentFixture<EmptyStatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyStatesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyStatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
