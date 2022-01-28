import styled from 'styled-components';

export const Container = styled.div`

.center {
    position: absolute;
    top: 40%;
    left: 80%;
    transform: translate(-50%, -50%);
}

.cardHome1, .cardHome2, .cardHome3,.cardHome4{
    position: absolute;
    background-color:#fff;
    padding:10px 10px;
    cursor: pointer;
    width: 220px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
    transition: .3s;
    top: 0px;
    left: -200px;

    display: flex;
    align-items: center;

    p{
        margin-left: 10px;
    }
   
    &:hover{
        transform: translateY(-10px);
    }
}
.cardHome2{
    top: 200px;
    left: -150px;
}

.cardHome3{
    top: 160px;
    left: 180px;
}

.cardHome4{
    top: -40px;
    left: 150px;

    span{
        top: 2px;
    }
}
.pulse{
    width: 200px;
    height: 200px;
    background: rgb(254, 51, 71);
    border-radius: 50%;
    color: #262626;
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    animation: animate 2s linear infinite;
}

.pulse > span{
    border: 4px solid #fff !important;
    border-radius: 50%;
}

.pulse img{ 
    top: 14px !important;
}
.pulse:before{
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: red;
    border-radius: 50%;
    z-index: -1;
    opacity: 0.7;
    left: 0;

}

.pulse:after{
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: red;
    border-radius: 50%;
    z-index: -1;
    opacity: 0.7;
    left: 0;

}

.pulse:before{
    animation: pulse 2s ease-out infinite;
    color: #FE3347;
    animation-delay: 1s;
}

.pulse:after{
    animation: pulse 2s ease-out infinite;
}


@keyframes pulse{
    100%{
        transform: scale(1.8);
        box-shadow: 0 0 0 0 rgba(254, 51, 71, 0), 0 0 0 0 rgba(254, 51, 71, 0);
        opacity: 0;
    }
}

/* @keyframes animate{
    0%{
        box-shadow: 0 0 0 0 rgba(254, 51, 71, 0.7), 0 0 0 0 rgba(254, 51, 71, .7);
    }
    40%{
        box-shadow: 0 0 0 50px rgba(254, 51, 71, 0), 0 0 0 0 rgba(254, 51, 71, .7);
    }
    80%{
        box-shadow: 0 0 0 50px rgba(254, 51, 71, 0), 0 0 0 0 rgba(254, 51, 71, 0);
    }
    100%{
        box-shadow: 0 0 0 0 rgba(254, 51, 71, 0), 0 0 0 0 rgba(254, 51, 71, 0);
    }
}
; */

`
