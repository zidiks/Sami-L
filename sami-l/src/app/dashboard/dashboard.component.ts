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

  activeCategory = 0;

  menu = [
    {
      id: 0,
      name: 'Pizza',
      icon: 'icon-pizza',
      items: [
        {
          name: 'Italian Pizza',
          price: 35,
          img: 'pizza5.jpg',
          orders: 40,
          revenue: 1200
        },
        {
          name: '365 Pizza',
          price: 35,
          img: 'pizza4.jpg',
          orders: 40,
          revenue: 1200
        },
        {
          name: 'Maxican Pizza',
          price: 35,
          img: 'pizza3.jpg',
          orders: 40,
          revenue: 1200
        },
        {
          name: 'New York Pizza',
          price: 35,
          img: 'pizza.jpg',
          orders: 40,
          revenue: 1200
        },
        {
          name: 'Louis Pizza',
          price: 35,
          img: 'pizza6.jpg',
          orders: 40,
          revenue: 1200
        },
        {
          name: 'California Pizza',
          price: 35,
          img: 'pizza7.jpg',
          orders: 40,
          revenue: 1200
        },
        {
          name: 'Deluxe Pizza',
          price: 35,
          img: 'pizza2.jpg',
          orders: 40,
          revenue: 1200
        }
      ]
    },
    {
      id: 1,
      name: 'Burger',
      icon: 'icon-burger',
      items: [
        {
          name: 'Big Burger',
          price: 35,
          img: 'burger.jpeg',
          orders: 40,
          revenue: 1200
        }
      ]
    },
    {
      id: 2,
      name: 'Pasta',
      icon: 'icon-icecream',
      items: [
        {
          name: 'Italian Pasta',
          price: 35,
          img: 'pasta.jpeg',
          orders: 40,
          revenue: 1200
        },
        {
          name: 'Masala Pasta',
          price: 35,
          img: 'pasta2.jpeg',
          orders: 40,
          revenue: 1200
        }
      ]
    },
    {
      id: 3,
      name: 'Cake',
      icon: 'icon-cake',
      items: [
        
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  isSelectedItem(id: number) {
    return id == this.activeCategory;
  }

  selectItem(id: number) {
    this.activeCategory = id;
  }

}
