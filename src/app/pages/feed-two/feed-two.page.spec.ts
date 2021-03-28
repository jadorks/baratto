import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedTwoPage } from './feed-two.page';

describe('FeedTwoPage', () => {
  let component: FeedTwoPage;
  let fixture: ComponentFixture<FeedTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
