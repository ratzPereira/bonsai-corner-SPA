import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'bc-globalFeed',
  templateUrl: './globalFeed.componenet.html',
  styleUrls: ['./globalFeed.componenet.scss'],
})
export class GlobalFeedComponent {
  apiUrl = '/bonsai/feed';
}
