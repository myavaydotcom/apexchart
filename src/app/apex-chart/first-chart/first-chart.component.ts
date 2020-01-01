import { Component, OnInit, ViewChild } from '@angular/core';
import * as ApexCharts  from 'apexcharts/dist/apexcharts.common.js';

@Component({
  selector: 'app-first-chart',
  templateUrl: './first-chart.component.html',
  styleUrls: ['./first-chart.component.scss']
})
export class FirstChartComponent implements OnInit {
  options: object = {
    chart: {
      type: 'line',
            zoom: {
              enabled: false
            }
    },
    series: [{
      name: 'sale',
      data: [30,140,45,250,9,91,125]
    }],
    stroke: {
    curve: 'smooth',
     dashArray: 3
  },
    markers: {
      size: 5,
  },
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }


  constructor() { }

  ngOnInit() {
    this.showChart();
  }

  showChart() {
    let chart = new ApexCharts(document.querySelector('#chart'), this.options)
    chart.render();
  }


}
