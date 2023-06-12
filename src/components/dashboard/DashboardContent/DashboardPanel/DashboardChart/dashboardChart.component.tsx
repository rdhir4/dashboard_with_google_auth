import React from 'react'
import StyledDashboardChart from './dashboard.styled'
import Charts from '../../../../Charts/charts.component'

export interface IDashboardChart {
  chartType?: string
}

const DashboardChart = (props: IDashboardChart) => {
  const { chartType } = props;
  return (
    <StyledDashboardChart>
      <div className='da-panel-header-cn'>
        <div className='da-title'>Top Product</div>
        <div className='da-date'>May - June 2021</div>
      </div>
      <Charts
        chartType = {chartType}
      />
    </StyledDashboardChart>
  )
}

export default DashboardChart