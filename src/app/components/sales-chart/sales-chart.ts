import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.html',
})
export class SalesChartComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    new Chart('salesChart', {
      type: 'bar',

      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],

        datasets: [
          {
            label: 'Total Orders',
            data: [1200, 2000, 2800, 1500, 3000, 1900, 1700, 1400, 2100, 1200, 900, 600],
            backgroundColor: '#F59E0B',
            borderRadius: 6,
            barThickness: 10,
          },

          {
            label: 'Total Sales',
            data: [1800, 2600, 3200, 2200, 3800, 2600, 2100, 1800, 2600, 1700, 1200, 900],
            backgroundColor: '#EF4444',
            borderRadius: 6,
            barThickness: 10,
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: '#FFFFFF',
            titleColor: '#23272E',
            bodyColor: '#23272E',
            borderColor: '#E5E7EB',
            borderWidth: 1,
          },
        },

        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 11,
              },
            },
          },

          y: {
            display: false,
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }
}
