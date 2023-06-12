import React from 'react'
import StyledDashboardSidebar from './dashboardSidebar.styles'
import SidebarList from './DashboardSidebarList/sidebarList.component'

const DashboardSidebar= () => {
  return (
    <StyledDashboardSidebar>
      <div className='da-dashboard-list-cn'>
        <div className='da-sidebar-title'>Board.</div>
        <SidebarList/>
      </div>
    </StyledDashboardSidebar>
  )
}

export default DashboardSidebar



