import styled from "styled-components";

export const MaxContainerHome = styled.main`
    justify-content:space-between;

    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height:90vh;
    position: relative;
    .container-text-home{
        width: 50%;

        h1{
            font-size: 3.5rem;
            max-width: 500px;
            line-height: 70px;
        }

        p{
            font-size: 1rem;
            line-height:30px;
            margin-top: 30px;
            margin-bottom: 50px;           
            max-width: 600px;
        }
        a{
            background-color:#1F1F2E;
            display: flex;
            align-items: center;
            justify-content: center;
            height:50px;
            width: 200px;
            color: #FFFFFF;
            border-radius:10px;
            transition: .3s;

            &:hover{
                background-color: #FF3651;
            }
        }
    }
`