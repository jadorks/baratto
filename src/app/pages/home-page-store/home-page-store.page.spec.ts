import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePageStorePage } from './home-page-store.page';

describe('HomePageStorePage', () => {
  let component: HomePageStorePage;
  let fixture: ComponentFixture<HomePageStorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageStorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
