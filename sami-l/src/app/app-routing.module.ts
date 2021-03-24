import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingComponent } from './accounting/accounting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeerComponent } from './employeer/employeer.component';
import { FoodComponent } from './food/food.component';
import { HelpComponent } from './help/help.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'food', component: FoodComponent },
  { path: 'employeer', component: EmployeerComponent },
  { path: 'accounting', component: AccountingComponent },
  { path: 'help', component: HelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
