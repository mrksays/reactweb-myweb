import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import { MdOutlineArrowForward } from 'react-icons/md';

// import { Link as LinkRouter } from 'react-router-dom';

export const SecondaryNav = styled.div`
height: 36px;
background-color: transparent;

`;

export const SecondaryWrap = styled.div`

    display: flex;
    
    align-items: center;
   
    justify-content: center;
    position: relative;
    z-index: 1000;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 25px;
    color: inherit;

`;

export const SecondaryNavBG = styled.div`
:before{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 100%;
    z-index: -1;
    width: 300px;
    height: 35px;
    background: -o-linear-gradient(left,rgba(var(--announcement-bg-color),0) 0,rgba(var(--announcement-bg-color),1) 80%);
    background: linear-gradient(90deg,rgba(var(--announcement-bg-color),0),rgba(var(--announcement-bg-color),1) 80%);
}
// :after {
//     content: "";
//     display: block;
//     position: absolute;
//     top: 0;
//     left: 100%;
//     z-index: -1;
//     width: 300px;
//     height: 35px;
//     background: -o-linear-gradient(left,rgba(var(--announcement-bg-color),1) 20%,rgba(var(--announcement-bg-color),0) 100%);
//     background: linear-gradient(90deg,rgba(var(--announcement-bg-color),1) 20%,rgba(var(--announcement-bg-color),0));
// }
`;

export const SecondaryContentContainer = styled.div`

    display: flex;
    background: #fff;
    align-items: center;
    
    :before {
        content: '';
    position: absolute;
    top: 35px;
    left: 340px;
    border-top: 19px solid white;
    border-left: 26px solid black;
        
    }

    :after {
        content: '';
        position: absolute;
        top: 35px;
        right: 344px;
        border-top: 19px solid white;
        border-right: 22px solid black;
    }
`;

export const SecondaryContent = styled.div`
height: 100%;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const DisplayImgLink = styled.div`
    display: flex;
    flex: 0 0 45px;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 54px;
    overflow: hidden;
    padding-right: 10px;
  
`;

export const DisplayImg = styled.img`
display: block;
max-width: 100%;
max-height: 100%;
margin: 0 0px 0px 20px;
border-radius: 50%;
`;

export const SecondaryP = styled.p`
font-size: 16px;
letter-spacing: .04em;
margin: 0;
`;

export const SecondaryButton = styled.button`
background: transparent;
color: #000;
margin-left: 3px;
border: none;
font-size: 14px;

:before{
    content: '';
    border-left: 2px solid #00eac7;
    padding-left: 15px;
}

:hover{
    color: #00eac7;
    transition: 0.5s ease-in-out;
}
`;

export const ArrowRight = styled(MdOutlineArrowForward)`
  margin-left: 6px;
  font-size: 15px;
`;