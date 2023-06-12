import React, { useRef } from 'react'
import { PieChartOptions, splineChartOptions } from './charts.util';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import StyledChart from './charts.style';
import { IDashboardChart } from '../dashboard/DashboardContent/DashboardPanel/DashboardChart/dashboardChart.component';

const Charts = (props: IDashboardChart) => {
  const{ chartType } = props;

  const ref: any = useRef(null);
  if (ref && ref.current && ref.current.chart) {
    ref.current.chart.reflow();
  }
  return(
    <StyledChart>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartType === 'pie' ? PieChartOptions : splineChartOptions}
      />
    </StyledChart>
  )
}

export default Charts;