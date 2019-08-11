import { Component } from '@angular/core';

import { ad } from '../ad.interface';

@Component({
  selector: 'app-angular-ad',
  templateUrl: './angular-ad.component.html',
  styleUrls: ['./angular-ad.component.css']
})
export class AngularAdComponent implements ad {
  data: any

  constructor() { }

}