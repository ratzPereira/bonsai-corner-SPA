import { Injectable } from '@angular/core';
@Injectable()
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('error setting in local storage',error);
    }
  }

  get(key: string): any {

    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (error) {
        console.error('error getting from local storage', error);
    }
  }
}
