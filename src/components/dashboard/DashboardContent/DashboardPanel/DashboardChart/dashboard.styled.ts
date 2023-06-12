import styled from "styled-components";

const StyledDashboardChart = styled.div`
    height: 100%;
    width: 100%;
    background-color: var(--whiteColor);
    border-radius: 20px;
    overflow-y: scroll;
    padding: 20px 40px 0 40px;
    .da-panel-header-cn {
        display: flex;
        .da-title {
            flex: 1;
            font: 18px Montserrat;
            font-weight: 700;
        }
        .da-date {
            font: 12px Montserrat;
        }
    }
`

export default StyledDashboardChart