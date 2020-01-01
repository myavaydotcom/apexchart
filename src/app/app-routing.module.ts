import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstChartComponent } from './apex-chart/first-chart/first-chart.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
   {
     path : 'apexcharts',
     children : [
        {
          path : 'firstchart',
          component : FirstChartComponent
        }
     ]
   },{
     path : '**',
     component : ErrorComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
