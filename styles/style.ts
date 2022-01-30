import styled from "styled-components";

export const MaxContainerHome = styled.main`
    justify-content:space-between;

    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height:calc(100vh - 55px);
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


export const MyPosts = styled.section`
    background: #1F1F2E;
    padding-top: 100px;
    padding-bottom: 30px;
`
export const LinkPost = styled.a`
    display: flex;
    width: 350px;
    flex-direction: column;

    img{
        object-fit: cover;
        border-radius:20px;
    }

    h2{
        color: #fff;
        font-weight: bold;
        font-size:1.5rem;
        margin-bottom: 16px;
    }
    h3{
        color: rgba(255,255,255,0.5);
        font-weight:500;
        font-size: .9rem;
        margin-bottom: 16px;
    }

    span{
        color: rgba(255,255,255,0.5);
        font-weight:500;
        font-size: .7rem;
    }

    padding: 10px;
    transition: .3s;
    border-radius: 10px;
    &:hover{
        background-color: rgba(255,255,255,.1)
    }
`
interface PropsTypeArticle {
    color: string;
}
export const TypeArticle  = styled.p<PropsTypeArticle>`
    color: ${(props) => props.color};
    margin: 16px 0;

    background: rgba(255,255,255,.1);
    width: fit-content;
    padding: 10px 20px;
    border-radius: 10px;

`