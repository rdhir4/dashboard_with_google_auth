import styled from "styled-components";

const StyledDashboardCard = styled.div`
    background-color: var(--whiteColor);
    padding: 30px 40px;
    border-radius: 20px;
    .da-header-cn {
        display: flex;
        .da-card-header {
            flex: 1;
            font: 18px Montserrat;
            font-weight: 700;
        }
        .da-card-options {
            font: 12px Montserrat;
            color: '#858585';
        }
        margin-bottom: 25px;
    }
    .da-card-cn {
        
        .da-card-content-cn {
            display: flex;
            margin-bottom: 13px;
            :last-child {
                    margin-bottom: 0;
                }
            .da-card-desc-cn {
                
                font: 12px Lato;
                color: #999999;
               
                .da-card-title-cn {
                    font-size: 14px;
                    color: #666666;
                }
            }
            .da-tag-divider{
                height: 48px;
                margin-right: 15px;
            }
        }
    }
`

export default StyledDashboardCard