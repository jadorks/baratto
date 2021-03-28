import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FeedCardOneComponent } from './feed-card-one/feed-card-one.component';
import { FeedCardTwoComponent } from './feed-card-two/feed-card-two.component';
import { FeedCardThreeComponent } from './feed-card-three/feed-card-three.component';
import { ArticleItemOneComponent } from './article-item-one/article-item-one.component';
import { ArticleItemTwoComponent } from './article-item-two/article-item-two.component';
import { StoryCardComponent } from './story-card/story-card.component';
import { CardCategoryNewsComponent } from './card-category-news/card-category-news.component';
import { CardFavoriteNewsComponent } from './card-favorite-news/card-favorite-news.component';
import { SmallBlogCardComponent } from './small-blog-card/small-blog-card.component';
import { ArticleQuoteComponent } from './article-quote/article-quote.component';
import { ArticleCommentComponent } from './article-comment/article-comment.component';
import { ArticlePictureComponent } from './article-picture/article-picture.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { NotificationItemComponent } from './notification-item/notification-item.component';
import { ProductCardLgComponent } from './product-card-lg/product-card-lg.component';
import { ProductCardMdComponent } from './product-card-md/product-card-md.component';
import { ProductCardSmComponent } from './product-card-sm/product-card-sm.component';
import { ProductColorComponent } from './product-color/product-color.component';
import { ProductSizeComponent } from './product-size/product-size.component';
import { ReviewCounterComponent } from './review-counter/review-counter.component';
import { ShoppingCartItemComponent } from './shopping-cart-item/shopping-cart-item.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCollectionComponent } from './product-collection/product-collection.component';
import { ProductCardBasicComponent } from './product-card-basic/product-card-basic.component';
import { ProductCardItemComponent } from './product-card-item/product-card-item.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsCardItemComponent } from './news-card-item/news-card-item.component';
import { NewsGroupItemComponent } from './news-group-item/news-group-item.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { SelectableBtnComponent } from './selectable-btn/selectable-btn.component';
import { UtilsModule } from 'src/app/utils/utils.module';

@NgModule({
  declarations: [
    FeedCardOneComponent,
    FeedCardTwoComponent,
    FeedCardThreeComponent,
    ArticleItemOneComponent,
    ArticleItemTwoComponent,
    StoryCardComponent,
    CardCategoryNewsComponent,
    CardFavoriteNewsComponent,
    SmallBlogCardComponent,
    ArticleQuoteComponent,
    ArticleCommentComponent,
    ArticlePictureComponent,
    CreditCardComponent,
    FeatureCardComponent,
    NotificationItemComponent,
    ProductCardLgComponent,
    ProductCardMdComponent,
    ProductCardSmComponent,
    ProductColorComponent,
    ProductSizeComponent,
    ReviewCounterComponent,
    ShoppingCartItemComponent,
    ProductCardComponent,
    ProductCollectionComponent,
    ProductCardBasicComponent,
    ProductCardItemComponent,
    DropdownComponent,
    NewsCardComponent,
    NewsCardItemComponent,
    NewsGroupItemComponent,
    EmptyStateComponent,
    SelectableBtnComponent
  ],
  imports: [CommonModule, UtilsModule, IonicModule.forRoot()],
  exports: [
    FeedCardOneComponent,
    FeedCardTwoComponent,
    FeedCardThreeComponent,
    ArticleItemOneComponent,
    ArticleItemTwoComponent,
    StoryCardComponent,
    CardCategoryNewsComponent,
    CardFavoriteNewsComponent,
    SmallBlogCardComponent,
    ArticleQuoteComponent,
    ArticleCommentComponent,
    ArticlePictureComponent,
    CreditCardComponent,
    FeatureCardComponent,
    NotificationItemComponent,
    ProductCardLgComponent,
    ProductCardMdComponent,
    ProductCardSmComponent,
    ProductColorComponent,
    ProductSizeComponent,
    ReviewCounterComponent,
    ShoppingCartItemComponent,
    ProductCardComponent,
    ProductCollectionComponent,
    ProductCardBasicComponent,
    ProductCardItemComponent,
    DropdownComponent,
    NewsCardComponent,
    NewsCardItemComponent,
    NewsGroupItemComponent,
    EmptyStateComponent,
    SelectableBtnComponent
  ],
})
export class ComponentsModule {}
