import { Component } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.scss']
})
export class StockChartComponent {
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'xrange'
    },
    title: {
      text: 'Stock Chart'
    },
    xAxis: {
      type: 'datetime'
    },
    yAxis: {
      title: {
        text: ''
      },
      categories: ['Item 1', 'Item 2', 'Item 3']
    },
    series: [{
      type: 'xrange',
      name: 'Data',
      data: [{
        x: Date.UTC(2023, 3, 27),
        x2: Date.UTC(2023, 4, 2),
        y: 0
      }, {
        x: Date.UTC(2023, 4, 3),
        x2: Date.UTC(2023, 4, 8),
        y: 1
      }, {
        x: Date.UTC(2023, 4, 9),
        x2: Date.UTC(2023, 4, 15),
        y: 2
      }]
    }]
  };

}
