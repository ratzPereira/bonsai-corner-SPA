import { FeedStateInterface } from './../modules/feed/components/feed/types/feed.state.interface';
import { AuthStateInterface } from './../../auth/types/authState.interface';

export interface AppStateInterface{
    auth: AuthStateInterface
    feed: FeedStateInterface
}