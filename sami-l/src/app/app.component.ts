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
      icon: 'clover.svg'
    },
    {
      title: 'Reservation',
      route: '/reservation',
      icon: 'rep.svg'
    },
    {
      title: 'Food Menu',
      route: '/food',
      icon: 'knife.svg'
    },
    {
      title: 'Employeer',
      route: '/employeer',
      icon: 'emp.svg'
    },
    {
      title: 'Accounting',
      route: '/accounting',
      icon: 'acc.svg'
    },
    {
      title: 'Help Center',
      route: '/help',
      icon: 'q.svg'
    }
  ]
}
