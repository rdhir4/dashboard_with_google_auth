import  styled  from "styled-components"

const StyledLoginForm  = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: auto;

    .da-form-with-header-cn {
        display: block;
    
        .da-login-form-cn {
            height: fit-content;
            background: var(--whiteColor);
            border-radius: 20px;
            padding: 30px;
            width: fit-content;
            label, input {
                display: inherit;
                font-size : 16px;
                font-family: 'Lato', sans-serif;
            }
            
            input {
                padding: 10px 15px;
                width: 295px;
                border-radius: 10px;
                border: none;
                background-color: var(--body);
                outline: none;
                margin-top: 10px;
                margin-bottom: 20px;
            }

            .da-forgot-pass {
                font: 16px Lato;
                color: var(--linkColor);
            }

            .da-signin-btn {
                padding: 9px 0px 9px 0px;
                width: 100%;
                font: 12px Montserrat;
                border: none;
                margin-top: 20px;
                background-color: #000000;
                color: var(--whiteColor);
                border-radius: 10px;
            }
        }
    }
`

export default StyledLoginForm