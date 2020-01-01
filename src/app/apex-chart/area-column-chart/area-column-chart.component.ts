import { Component, OnInit } from '@angular/core';
import * as ApexCharts  from 'apexcharts/dist/apexcharts.common.js';

@Component({
  selector: 'app-area-column-chart',
  templateUrl: './area-column-chart.component.html',
  styleUrls: ['./area-column-chart.component.scss']
})
export class AreaColumnChartComponent implements OnInit {
   options: object =  {
    series: [{
      name: 'net revenue',
      type: 'line',
      data: [30,140,45,250,9,91,125,90]
    },
      {
       name: 'net profit',
      type: 'column',
      data: [2,5,12,98,43,112,67,23]
    }],
      chart:
       {
         height: 400,
         type: 'line',
        },
         stroke: {
          curve: 'smooth'
        },
         fill: {
          type:'solid',
          opacity: [0.8, 1],
        },
    xaxis: {
      categories: [10,20,30,40,50,60,70,80,90]
    }
  }

  ngOnInit() {
    this.showChart();
  }

  showChart() {
    let chart = new ApexCharts(document.querySelector('#chart'), this.options)
    chart.render();
  }

   
   
}
