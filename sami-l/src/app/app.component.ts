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
      route: '/dashboard'
    },
    {
      title: 'Reservation',
      route: '/reservation'
    },
    {
      title: 'Food Menu',
      route: '/food'
    },
    {
      title: 'Employeer',
      route: '/employeer'
    },
    {
      title: 'Accounting',
      route: '/accounting'
    },
    {
      title: 'Help Center',
      route: '/help'
    }
  ]
}
