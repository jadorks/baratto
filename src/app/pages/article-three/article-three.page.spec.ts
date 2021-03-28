import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArticleThreePage } from './article-three.page';

describe('ArticleThreePage', () => {
  let component: ArticleThreePage;
  let fixture: ComponentFixture<ArticleThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
