import styled from "styled-components";

const StyledDashboardSidebar = styled.div`
   display: flex;
   flex-direction: column;
    .da-dashboard-list-cn {
        height: 100%;
        background-color: var(--blackColor);
        width: 280px;
        padding: 60px 0 60px 50px;
        border-radius: 30px;
        position: relative;

        .da-sidebar-title {
            font: 36px Montserrat;
            font-weight: 700;
            color: var(--whiteColor);
            margin-bottom: 60px;
        }
    }


`

export default StyledDashboardSidebar