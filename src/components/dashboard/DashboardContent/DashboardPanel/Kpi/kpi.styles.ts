import styled from "styled-components";

const StyledKpi = styled.div<
{
  color: string
}
>`
  height: 100%;
    .da-kpi-cn {
      background-color: ${(props) => props.color};
      padding: 20px 25px;
      border-radius: 20px;
      display: table-caption;
      width: 170px;
    }
    .da-panel-icon-cn {
      text-align: right;
    }
    .da-kpi-title {
      font: 14px Lato;
      margin-bottom: 5px;
    }
    .da-kpi-value {
      font: 24px Lato;
      font-weight: 700;
    }

`

export default StyledKpi