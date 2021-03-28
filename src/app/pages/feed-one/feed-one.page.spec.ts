import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedOnePage } from './feed-one.page';

describe('FeedOnePage', () => {
  let component: FeedOnePage;
  let fixture: ComponentFixture<FeedOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
