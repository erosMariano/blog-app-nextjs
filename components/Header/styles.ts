import styled from 'styled-components';

export const Container = styled.header`
    padding: 10px 0px;
`;

export const MaxContainer = styled.div`
    display: flex;
    justify-content:space-between;
    max-width: 1200px;
    margin: 0 auto;
    div{
        display: flex;
        align-items: center;
    }

    button{
        background: none;
        border: none;
    }

    h2{
        span{
            color: #FF3651;
        }
    }


    .modeTheme{
        button{
            cursor: pointer;
        }
        svg{
            width: 20px;
            height: 20px;
            color: #707070;
        }
    }
`
interface PropsInput{
    width: number;
}
export const MyInput = styled.input<{width: string}>`
        width: ${({ width }) => width};
        transition: .3s ease-in-out;
        height: 33px;
        background: #e3e3e3d9;
        border: none;
        border-radius: 50px;


        padding-left: 25px;
    
` 