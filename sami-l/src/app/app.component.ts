import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuList = [
    {
      title: 'Dashboard',
      route: '/dashboard',
      icon: 'icon-clover'
    },
    {
      title: 'Reservation',
      route: '/reservation',
      icon: 'icon-rep'
    },
    {
      title: 'Food Menu',
      route: '/food',
      icon: 'icon-knife'
    },
    {
      title: 'Employeer',
      route: '/employeer',
      icon: 'icon-emp'
    },
    {
      title: 'Accounting',
      route: '/accounting',
      icon: 'icon-acc'
    },
    {
      title: 'Help Center',
      route: '/help',
      icon: 'icon-q'
    }
  ]
}
