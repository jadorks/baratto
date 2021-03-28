import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePageDarkPage } from './home-page-dark.page';

describe('HomePageDarkPage', () => {
  let component: HomePageDarkPage;
  let fixture: ComponentFixture<HomePageDarkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageDarkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageDarkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
