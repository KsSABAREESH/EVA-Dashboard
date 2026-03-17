import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';
import { Stats } from './components/stats/stats';
import { SalesChartComponent } from './components/sales-chart/sales-chart';
import { TopSelling } from './components/top-selling/top-selling';
import { DoughnutChart } from './components/doughnut-chart/doughnut-chart';
import { RecentOrders } from "./components/recent-orders/recent-orders";
import { RecentActivity } from "./components/recent-activity/recent-activity";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Sidebar,
    Stats,
    SalesChartComponent,
    TopSelling,
    DoughnutChart,
    RecentOrders,
    RecentActivity
],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('EvaDashboard');
}
