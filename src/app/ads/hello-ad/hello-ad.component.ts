import { Component } from '@angular/core';

import { ad } from '../ad.interface'

@Component({
  selector: 'app-hello-ad',
  templateUrl: './hello-ad.component.html',
  styleUrls: ['./hello-ad.component.css']
})
export class HelloAdComponent implements ad {
  data: any
}