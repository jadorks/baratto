import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedThreePage } from './feed-three.page';

describe('FeedThreePage', () => {
  let component: FeedThreePage;
  let fixture: ComponentFixture<FeedThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
