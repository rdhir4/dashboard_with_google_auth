import React from 'react'
import { sidebarList } from '../../dashboard.util';
import { ISidebarList } from '../../../../Models/dashboard';
import StyledSidebarList from './sidebarList.styles';

const SidebarList = () => {
  return (
    <StyledSidebarList>
      {sidebarList.map((item: ISidebarList) => {
        const {Name, Icon} = item;
        return (
          <div className='da-list-cn' key = {Name}>
            <Icon
              width={18}
              height={18}/>
            <span className='da-list-item-title'>{Name}</span>
          </div>
        )
      })}
      <div className='da-dashboard-footer-cn'>
        <div className='da-help-text'> Help</div>
        <div className='da-contact-us'>Contact Us</div>
      </div>
    </StyledSidebarList>
  )
}

export default SidebarList