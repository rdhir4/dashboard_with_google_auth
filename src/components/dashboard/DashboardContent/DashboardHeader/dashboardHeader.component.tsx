import React from 'react'
import StyledDashboardHeader from './dashboardHeader.styles'
import SearchIcon from '../../../../Assets/search.svg'
import BellIcon from '../../../../Assets/bellIcon.svg'

const DashboardHeader = () => {
  return (
    <StyledDashboardHeader>    
      <div className='da-header'>Dashboard</div>
      <div className='da-header-right-pane'>
        <div className='da-search-cn'>
          <input placeholder='Search...' className='da-searchBar'/>
          <div className='da-search-icon-cn'>
            <SearchIcon
              width={12}
              height={12}
            />
          </div>
        </div>
        <span className='da-bell-icon-cn'>
          <BellIcon 
            height={20}
            width={18}/>
        </span>
      </div>
    </StyledDashboardHeader>

  )
}
export default DashboardHeader