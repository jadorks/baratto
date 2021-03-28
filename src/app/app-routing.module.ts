import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'feed-one',
    loadChildren: () => import('./pages/feed-one/feed-one.module').then( m => m.FeedOnePageModule)
  },
  {
    path: 'feed-two',
    loadChildren: () => import('./pages/feed-two/feed-two.module').then( m => m.FeedTwoPageModule)
  },
  {
    path: 'feed-three',
    loadChildren: () => import('./pages/feed-three/feed-three.module').then( m => m.FeedThreePageModule)
  },
  {
    path: 'profile-one',
    loadChildren: () => import('./pages/profile-one/profile-one.module').then( m => m.ProfileOnePageModule)
  },
  {
    path: 'profile-two',
    loadChildren: () => import('./pages/profile-two/profile-two.module').then( m => m.ProfileTwoPageModule)
  },
  {
    path: 'profile-three',
    loadChildren: () => import('./pages/profile-three/profile-three.module').then( m => m.ProfileThreePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login-one',
    loadChildren: () => import('./pages/login-one/login-one.module').then( m => m.LoginOnePageModule)
  },
  {
    path: 'login-two',
    loadChildren: () => import('./pages/login-two/login-two.module').then( m => m.LoginTwoPageModule)
  },
  {
    path: 'login-three',
    loadChildren: () => import('./pages/login-three/login-three.module').then( m => m.LoginThreePageModule)
  },
  {
    path: 'sign-one',
    loadChildren: () => import('./pages/sign-one/sign-one.module').then( m => m.SignOnePageModule)
  },
  {
    path: 'sign-two',
    loadChildren: () => import('./pages/sign-two/sign-two.module').then( m => m.SignTwoPageModule)
  },
  {
    path: 'sign-three',
    loadChildren: () => import('./pages/sign-three/sign-three.module').then( m => m.SignThreePageModule)
  },
  {
    path: 'article-one',
    loadChildren: () => import('./pages/article-one/article-one.module').then( m => m.ArticleOnePageModule)
  },
  {
    path: 'article-two',
    loadChildren: () => import('./pages/article-two/article-two.module').then( m => m.ArticleTwoPageModule)
  },
  {
    path: 'article-three',
    loadChildren: () => import('./pages/article-three/article-three.module').then( m => m.ArticleThreePageModule)
  },
  {
    path: 'payments-one',
    loadChildren: () => import('./pages/payments-one/payments-one.module').then( m => m.PaymentsOnePageModule)
  },
  {
    path: 'payments-two',
    loadChildren: () => import('./pages/payments-two/payments-two.module').then( m => m.PaymentsTwoPageModule)
  },
  {
    path: 'settings-one',
    loadChildren: () => import('./pages/settings-one/settings-one.module').then( m => m.SettingsOnePageModule)
  },
  {
    path: 'settings-two',
    loadChildren: () => import('./pages/settings-two/settings-two.module').then( m => m.SettingsTwoPageModule)
  },
  {
    path: 'settings-three',
    loadChildren: () => import('./pages/settings-three/settings-three.module').then( m => m.SettingsThreePageModule)
  },
  {
    path: 'notifications-one',
    loadChildren: () => import('./pages/notifications-one/notifications-one.module').then( m => m.NotificationsOnePageModule)
  },
  {
    path: 'notifications-two',
    loadChildren: () => import('./pages/notifications-two/notifications-two.module').then( m => m.NotificationsTwoPageModule)
  },
  {
    path: 'onboarding-one',
    loadChildren: () => import('./pages/onboarding-one/onboarding-one.module').then( m => m.OnboardingOnePageModule)
  },
  {
    path: 'onboarding-two',
    loadChildren: () => import('./pages/onboarding-two/onboarding-two.module').then( m => m.OnboardingTwoPageModule)
  },
  {
    path: 'catalog',
    loadChildren: () => import('./pages/catalog/catalog.module').then( m => m.CatalogPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./pages/shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'home-page-dark',
    loadChildren: () => import('./pages/home-page-dark/home-page-dark.module').then( m => m.HomePageDarkPageModule)
  },
  {
    path: 'home-page-cards',
    loadChildren: () => import('./pages/home-page-cards/home-page-cards.module').then( m => m.HomePageCardsPageModule)
  },
  {
    path: 'home-page-store',
    loadChildren: () => import('./pages/home-page-store/home-page-store.module').then( m => m.HomePageStorePageModule)
  },
  {
    path: 'product-detail-two',
    loadChildren: () => import('./pages/product-detail-two/product-detail-two.module').then( m => m.ProductDetailTwoPageModule)
  },
  {
    path: 'modals',
    loadChildren: () => import('./pages/modals/modals.module').then( m => m.ModalsPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./pages/filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'empty-states',
    loadChildren: () => import('./pages/empty-states/empty-states.module').then( m => m.EmptyStatesPageModule)
  },
  {
    path: 'modal-profile',
    loadChildren: () => import('./pages/modal-profile/modal-profile.module').then( m => m.ModalProfilePageModule)
  },
  {
    path: 'modal-location',
    loadChildren: () => import('./pages/modal-location/modal-location.module').then( m => m.ModalLocationPageModule)
  },
  {
    path: 'modal-confirmation',
    loadChildren: () => import('./pages/modal-confirmation/modal-confirmation.module').then( m => m.ModalConfirmationPageModule)
  },
  {
    path: 'modal-article',
    loadChildren: () => import('./pages/modal-article/modal-article.module').then( m => m.ModalArticlePageModule)
  },
  {
    path: 'modal-subscribe',
    loadChildren: () => import('./pages/modal-subscribe/modal-subscribe.module').then( m => m.ModalSubscribePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
