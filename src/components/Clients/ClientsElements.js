import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ClientsContainer = styled.div`
background: #000;
padding: 4% 1%;
justify-content: space-around;
`;

export const ClientH1 = styled.h1`
color: #fff;
text-align: center;
font-size: 18px;
`;

export const ClientsRow = styled.div`

max-width: 1400px;
margin: 40px auto 0px auto;
align-items: center;
grid-gap: 16px;
padding: 0 50px;
justify-content: space-around;
`;

export const ClientImg = styled.img`
width: 50px;
height: 60px;
padding: 12px;
opacity: 0.5;

:hover{
    opacity: 1;
    // transition: 0.5s all-ease;
}
`;
