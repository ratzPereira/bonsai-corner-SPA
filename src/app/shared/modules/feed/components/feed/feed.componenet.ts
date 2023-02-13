import { getFeedAction } from './../../store/actions/getFeed.actions';
import { OnInit, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'bc-feed',
  templateUrl: './feed.componenet.html',
  styleUrls: ['./feed.componenet.scss'],
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }
}
