import React from 'react'
import StyledKpi from './kpi.styles';

interface IKpiProps {
  panelId: string;
  title: string;
  color: string;
  value: string;
  icon: string;
}  

const Kpi = (props: IKpiProps) => {
  const {panelId, title, color, icon, value} = props;
    
  return (
    <StyledKpi
      color={color}
    >
      <div id = {panelId} className='da-kpi-cn'>
        <div className='da-panel-icon-cn'>
          <img src={`data:image/svg+xml;utf8,${icon}`} className='da-panel-icon' />
        </div>
        <div className='da-kpi-title'>{title}</div>
        <div className='da-kpi-value'>{value}</div>
      </div>
    </StyledKpi>
  )
}
export default Kpi
