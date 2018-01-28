import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage = 'DashboardPage';

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [

    { title: 'Profile', pageName: 'ProfilePage', icon: 'person' },
    { title: 'Dashboard', pageName: 'DashboardPage', icon: 'cash'},
    { title: 'Info', pageName: 'InfoPage', icon: 'information-circle' },
    { title: 'Calendar', pageName: 'CalendarPage', icon: 'calendar' },
    { title: 'Bills', pageName: 'BillsPage', icon: 'cash' },
  ];

  constructor(public navCtrl: NavController) {
  }
  openPage(page: PageInterface) {
    this.nav.setRoot(page.pageName)
  }
  isActive(page: PageInterface) {
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
}
