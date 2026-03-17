import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-doughnut-chart',
  imports: [],
  templateUrl: './doughnut-chart.html',
  styleUrl: './doughnut-chart.css',
})
export class DoughnutChart implements AfterViewInit {
  ngAfterViewInit(): void {
    new Chart('orderChart', {
      type: 'doughnut',

      data: {
        labels: [
          'Delivered (30%)',
          'Shipped (20%)',
          'Processing (20%)',
          'Pending (15%)',
          'Cancelled (5%)',
          'Returned (10%)',
        ],

        datasets: [
          {
            data: [30, 20, 20, 15, 5, 10],

            backgroundColor: ['#10B981', '#3B82F6', '#EF4444', '#F59E0B', '#7806FF', '#F6673B'],

            borderWidth: 0,
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          legend: {
            position: 'right',

            labels: {
              usePointStyle: true,
              pointStyle: 'circle',

              boxWidth: 6,
              boxHeight: 6,

              padding: 14,

              font: {
                size: 11,
              },
            },
          },
        },

        cutout: '80%',
      },
    });
  }
}
