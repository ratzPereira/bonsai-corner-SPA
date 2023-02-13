
import {
  feedSelector,
  errorSelector,
  isLoadingSelector,
} from './../../store/selectors';
import { GetFeedResponseInterface } from './types/get.feed.response.interface';
import { getFeedAction } from './../../store/actions/getFeed.actions';
import { OnInit, Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'bc-feed',
  templateUrl: './feed.componenet.html',
  styleUrls: ['./feed.componenet.scss']
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string;

  feed$: Observable<GetFeedResponseInterface | null>;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean>;

  

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues() {
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }
}
