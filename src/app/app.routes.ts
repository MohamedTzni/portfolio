import { Routes } from '@angular/router';
import { MainPage } from './main/main-page/main-page';
import { LegalNotice } from './shared/legal-notice/legal-notice';
import { PrivacyPolicy } from './shared/privacy-policy/privacy-policy';
import { BlogComponent } from './blog/blog';

export const routes: Routes = [
  {
    path: '',
    component: MainPage,
  },
  {
    path: 'legal-notice',
    component: LegalNotice,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicy,
  },
  {
    path: '**',
    redirectTo: '',
  },
   {
    path: 'blog',
    component: BlogComponent
  }
];
