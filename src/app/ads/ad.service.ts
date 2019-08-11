import { Injectable } from '@angular/core';

import { AdItem } from './ad-item';
import { AngularAdComponent } from './angular-ad/angular-ad.component';
import { HelloAdComponent } from './hello-ad/hello-ad.component';

@Injectable()
export class AdService {

  constructor() { }

  getAds(): AdItem[] {
    return [
      { component: AngularAdComponent, data: { body: 'Angular is awesome' } },
      { component: HelloAdComponent, data: { who: 'World' } }
    ]
  }
}