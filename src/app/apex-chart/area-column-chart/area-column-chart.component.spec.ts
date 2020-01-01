import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaColumnChartComponent } from './area-column-chart.component';

describe('AreaColumnChartComponent', () => {
  let component: AreaColumnChartComponent;
  let fixture: ComponentFixture<AreaColumnChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaColumnChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaColumnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
