import { Component, OnInit } from '@angular/core';
import { stats } from './stats';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  stats: stats = {
    reservation: 23,
    menu: 100,
    employeers: 65,
    rating: 4.9,
    todaySold: 289,
    weeklySold: 3500,
    todayIncome: 1200,
    weeklyIncome: 9000
  }

  constructor() { }

  ngOnInit(): void {
  }

}
