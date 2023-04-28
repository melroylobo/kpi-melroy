import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { StockChartComponent } from '../charts/stock-chart/stock-chart.component';
import * as Highcharts from 'highcharts';


import xrange from 'highcharts/modules/xrange';


xrange(Highcharts);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'My Chart'
    },
    series: [{
      name: 'Data',
      // type: 'xrange', // add this line
      type: 'area',
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

  cards: Card[] = [
    { title: 'Card 1', content: 'Lorem ipsum dolor sit amet.' },
    { title: 'Card 2', content: 'Consectetur adipiscing elit.' },
    { title: 'Card 3', content: StockChartComponent },
  ];

  // onDrop(event: CdkDragDrop<string[]>) {

  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
  //    // event.item.data.transform = "";
  //   }


  // }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
    console.log(`Moved item from index ${event.previousIndex} to index ${event.currentIndex}`);
  }

  // onDragEnd(event: any, card: any) {
  //   const element = event.item.element.nativeElement as HTMLElement;
  //   card.transform = `translate3d(${element.style.left}, ${element.style.top}, 0)`;
  // }
  ngAfterViewInit() {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            fill: true
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

  drop(event: CdkDragDrop<string[]>) {
  moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
}
}


interface Card {
  title: string;
  content: string | typeof StockChartComponent;
  transform?: string;
}