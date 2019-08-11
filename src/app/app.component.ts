import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';

import { AdItem } from './ads/ad-item'
import { AdService } from './ads/ad.service'
import { AdHostDirective } from './ads/ad-host.directive'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  currentAdIndex = 0;
  ads: AdItem[] = [];

  @ViewChild(AdHostDirective, { static: true }) adHost: AdHostDirective;

  constructor(public adService: AdService,
              public componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
    this.loadComponents();
  }

  loadComponents() {
    if (!this.ads.length) return 

    this.loadComponent(this.currentAdIndex)

    setInterval(() => {
      this.loadComponent(this.currentAdIndex)
    }, 3000) 
  }

  loadComponent(index: number) {
    const currentAdItem = this.ads[index]
    this.incrementAdIndex()

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(currentAdItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = currentAdItem.data
  }

  incrementAdIndex() {
    if (this.currentAdIndex === this.ads.length - 1) {
      this.currentAdIndex = 0;
    } else {
      this.currentAdIndex++;
    }
  }
}
