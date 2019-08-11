import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HelloAdComponent } from './ads/hello-ad/hello-ad.component'
import { AngularAdComponent } from './ads/angular-ad/angular-ad.component';
import { AdHostDirective } from './ads/ad-host.directive';
import { AdService } from './ads/ad.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloAdComponent, AngularAdComponent, AdHostDirective ],
  entryComponents: [ HelloAdComponent, AngularAdComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AdService]
})
export class AppModule { }
