import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Shopping Cart',
      url: '/shopping-cart',
      icon: 'cart'
    },
    {
      title: 'My Orders',
      url: '/my/orders',
      icon: 'basket'
    },
    {
      title: 'Manage Orders',
      url: '/admin/orders',
      icon: 'reorder'
    },
    {
      title: 'Manage Products',
      url: '/admin/products',
      icon: 'filing'
    },
    {
      title: 'Logout',
      url: '/admin/products',
      icon: 'log-out'
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
