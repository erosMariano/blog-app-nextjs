import styled from "styled-components";

export const Article = styled.article`

    h1{
        margin-top: 50px;
        font-size:3rem;
        text-align:center;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    .type-and-date{
        display: flex;
        justify-content:center;
        align-items:center;
        margin-top: 32px;
        margin-bottom: 100px;
        color: #ccc;
        p{
            margin: 0px 10px;
        }

    }
    .container-img-principal{
        text-align:center;
        margin-bottom: 40px;
    }
    img{
        border-radius: 20px;
        margin: 0 auto;
    }

    h2,h3{
        margin-top: 30px;
        margin-bottom: 10px;
    }
    .containerPortable{
        color: #323232;
    }

`

interface PropsTypeArticle {
    color: string;
    background: string;
}

export const TypeArticleSlug = styled.p<PropsTypeArticle>`
    color: ${(props) => props.color};

    background: ${(props) => props.background};
    width: fit-content;
    padding: 10px 20px;
    border-radius: 10px;
`
