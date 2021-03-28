import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePageCardsPage } from './home-page-cards.page';

describe('HomePageCardsPage', () => {
  let component: HomePageCardsPage;
  let fixture: ComponentFixture<HomePageCardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageCardsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
