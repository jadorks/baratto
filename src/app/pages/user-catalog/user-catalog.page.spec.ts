import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserCatalogPage } from './user-catalog.page';

describe('UserCatalogPage', () => {
  let component: UserCatalogPage;
  let fixture: ComponentFixture<UserCatalogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCatalogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserCatalogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
