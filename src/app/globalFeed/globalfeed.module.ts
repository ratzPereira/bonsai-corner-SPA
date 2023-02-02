import { FeedModule } from './../shared/modules/feed/feed.module';
import { RouterModule } from '@angular/router';
import { GlobalFeedComponent } from './components/globalFeed/globalFeed.componenet';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes),FeedModule],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
