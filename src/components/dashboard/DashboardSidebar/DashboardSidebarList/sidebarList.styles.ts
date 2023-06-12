import styled from "styled-components";


const StyledSidebarList = styled.div`
    color: var(--whiteColor);
        .da-list-cn {
        font: 18px Montserrat;
        padding-bottom: 40px;
       :last-child {
        padding-bottom: 0px;
       }
        
        .da-list-item-title {
            margin-left: 20px;
        }
    }
    .da-dashboard-footer-cn {
        position: absolute;
        bottom: 40px;
        .da-help-text, .da-contact-us {
            font: 14px Montserrat;
        }
        .da-help-text {
            margin-bottom: 20px;
        }
    }
`

export default StyledSidebarList