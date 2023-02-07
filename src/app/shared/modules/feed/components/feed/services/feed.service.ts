import { BASE_URL } from './../../../../../const/url.const';
import { HttpClient } from '@angular/common/http';
import { GetFeedResponseInterface } from './../types/get.feed.response.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FeedService {
  constructor(private readonly http: HttpClient) {}
  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fullUrl = BASE_URL + url;

    return this.http.get<GetFeedResponseInterface>(fullUrl);
  }
}
