/* eslint-disable @typescript-eslint/indent */
import React, { useMemo } from 'react'
import { DashboardPanelTypes, dashboardConfig } from '../../dashboard.util'
import StyledDashboardPanel from './dashboardPanel.styles';
import { IDashboardPanel, ITag } from '../../../../Models/dashboard';
import Kpi from './Kpi/kpi.component';
import ReactGridLayout, { Responsive, WidthProvider } from "react-grid-layout";
import DashboardChart from './DashboardChart/dashboardChart.component';
import DashboardCard from './DashboardCard/dashboardCard.component';

const DashboardPanel = () => {

  const ResponsiveReactGridLayout = useMemo(() => WidthProvider(Responsive), []);

  const getPanel = (type: DashboardPanelTypes, id: string, title: string, color: string, value: string, icon: string, subType?: string, tags?: ITag[]) => {
    switch(type) {
    case DashboardPanelTypes.Kpi: 
      return <Kpi 
        panelId = {id}
        title = {title}
        color = {color}
        value={value}
        icon={icon}
      />
    case DashboardPanelTypes.Chart: 
      return <DashboardChart
        chartType = {subType}
      />

    case DashboardPanelTypes.Card: 
      return <DashboardCard
        tags = {tags}
      />
    default: 
      return null;
    }
  }


  const { Panels } = dashboardConfig;
  const l: ReactGridLayout.Layout[] = [];

  Panels.forEach((panel: IDashboardPanel) => {
    const {layout} = panel;
    l.push({...layout, static: true});
  })
  return (
    <StyledDashboardPanel>
      <ResponsiveReactGridLayout
        cols= {{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        breakpoints= {{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        isDraggable={false}
        isResizable={false}
        compactType='vertical'
        margin={[0,20]}
        rowHeight={90}
        draggableHandle='.draggable-handler'
      >
        {
          Panels.map((panel: IDashboardPanel) => {
            const {id, type, title, color, value, Icon, layout, subType, tags} = panel;
            return (
              <div key = {id} id = {id} className='da-dashboard-panel-cn panel grid-layout' data-grid = {layout}>
                {getPanel(type, id, title, color, value, Icon, subType, tags)}
              </div>
            )
          })}
      </ResponsiveReactGridLayout>
    </StyledDashboardPanel>
  )
}
export default DashboardPanel
