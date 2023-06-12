import styled from "styled-components";

const StyledDashboardHeader = styled.div`
    display: flex;
    width: 100%;
    .da-header {
        font: 24px Montserrat;
        font-weight: 700;
        flex: 1;
    }
    .da-header-right-pane {
        display: flex;
        .da-search-cn {
            position: relative;
            display: flex;
            input {
                outline: none;
                border: none;
                padding: 6px 15px;
                border-radius: 10px;
                font: 14px Lato;
                ::placeholder {
                    font: 14px Lato;
                    color: var(--searchPlaceholder);
                }
            }

            .da-search-icon-cn {
                position: absolute;
                top: 6px;
                right: 15px;
            }
        }
        .da-bell-icon-cn {
            margin-left: 30px;
            align-items: center;
            justify-content: center;
            display: flex;
        }
    }
`

export default StyledDashboardHeader