import React from 'react'
import StyledDashboardCard from './dashboardCard.styles'
import { ITag } from '../../../../../Models/dashboard'

interface IDashboardCard {
  tags?: ITag[]
}

const DashboardCard = (props: IDashboardCard) => {
  const {tags} = props;
  return (
    <StyledDashboardCard>
      <div className='da-header-cn'>
        <div className='da-card-header'>Today&apos;s Schedule</div>
        <div className='da-card-options'>See All</div>
      </div>
      <div className='da-card-cn'>
        {tags?.map((tag: ITag) => {
          const {color, title, time, location} = tag;
          return(
            <div className='da-card-content-cn' key = {title}>                
              <div className='da-tag-divider' style={{borderLeft: `2.5px solid ${color}`}}/>
              <div className='da-card-desc-cn'>
                <div className='da-card-title-cn'>{title}</div>
                <div className='da-card-time'>{time}</div>
                <div className='da-card-location'>{location}</div>
              </div>
            </div>
          )

        })}
      </div>
    </StyledDashboardCard>
  )
}

export default DashboardCard
