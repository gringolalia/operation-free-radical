import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home Cooking',
      url: '/home',
      icon: 'infinite'
    },
    {
      title: 'Soul Food Dishes',
      url: '/last',
      icon: 'bicycle'
    },
    {
      title: 'Fishes and Chips',
      url: '/list',
      icon: 'umbrella'
    },
    {
      title: 'Loaves and Fishes',
      url: '/least',
      icon: 'logo-ionic'
    },
    {
      title: 'Tacos y Enchiladas',
      url: '/lost',
      icon: 'airplane'
    },
    {
      title: 'Feijoada Completa',
      url: '/lust',
      icon: 'mic'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
