import { FeedComponent } from './components/feed/feed.componenet';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule],
  declarations: [FeedComponent],
  exports:[FeedComponent]
})
export class FeedModule {}
