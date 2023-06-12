import ReactGridLayout from "react-grid-layout";
import { DashboardPanelTypes } from "../components/dashboard/dashboard.util";
import { IProps } from "./svg";

export interface ISidebarList {
  Name: string,
  Icon: (props: IProps) => JSX.Element
}


export interface ITag {
  title: string; 
  time: string; 
  location: string; 
  color: string; 
}

export interface IDashboardPanel {
  id: string; 
  type: DashboardPanelTypes;
  Icon: string; 
  title: string; 
  value: string;
  color: string; 
  layout: ReactGridLayout.Layout;
  subType?: string;
  tags?: ITag[];
}

