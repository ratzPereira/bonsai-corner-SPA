import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { EffectsModule } from '@ngrx/effects';
import { FeedService } from './components/feed/services/feed.service';
import { FeedComponent } from './components/feed/feed.componenet';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reducers } from './store/reducers';
import {BannerModule} from "../banner/banner.module";
import {ErrorMessageModule} from "../errorMessage/errorMessage.module";

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule, BannerModule, ErrorMessageModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
