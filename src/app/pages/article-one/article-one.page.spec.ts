import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArticleOnePage } from './article-one.page';

describe('ArticleOnePage', () => {
  let component: ArticleOnePage;
  let fixture: ComponentFixture<ArticleOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
