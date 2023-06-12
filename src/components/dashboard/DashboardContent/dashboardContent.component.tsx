import React from 'react'
import DashboardHeader from './DashboardHeader/dashboardHeader.component'
import StyledDashboardContent from './dashboardContent.styles'
import DashboardPanel from './DashboardPanel/dashboardPanel.component'

const DashboardContent = () => {
 
  return (
    <StyledDashboardContent>
      <DashboardHeader/>
      <DashboardPanel/>
    </StyledDashboardContent>
  )
}
export default DashboardContent