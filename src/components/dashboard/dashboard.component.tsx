import React from 'react'
import DashboardSidebar from './DashboardSidebar/dashboardSidebar.component'
import DashboardContent from './DashboardContent/dashboardContent.component'
import StyledDashboard from './dashboard.styles'

const Dashboard = () => {
  return (
    <StyledDashboard>
      <DashboardSidebar/>
      <DashboardContent/>
    </StyledDashboard>
  )
}

export default Dashboard
