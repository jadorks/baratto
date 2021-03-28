import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArticleTwoPage } from './article-two.page';

describe('ArticleTwoPage', () => {
  let component: ArticleTwoPage;
  let fixture: ComponentFixture<ArticleTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
