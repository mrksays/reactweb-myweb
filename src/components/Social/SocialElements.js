import styled from 'styled-components'
import {MdFacebook} from 'react-icons/md'
import {FaSnapchat, FaLinkedin, FaInstagram, FaYoutube, FaGoogle} from 'react-icons/fa'

export const SocialAside = styled.aside`
align-items: center;
display: Block;
`;

export const SocialContainer = styled.div`
display: Block;
position: fixed;
top: 30%;
right: 1%;
z-index: 80;
background: #111b24;
// transform: translateY(-50%);
`;

export const SocialUl = styled.div`
display: block;
align-items: center;
justify-content: center;
margin: 0;
padding: 0;
`;

export const SocialLi = styled.div`
display: block;
width: 40px;
height: 40px;
margin: 0;
padding: 0;
background: #111b24;
`;

export const SocialA = styled.div`
display: block;  
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 18px;
`;

export const FacebookIcon = styled(MdFacebook)`
color: #fff;
width: 40px;
margin-top: 25px;
    margin-bottom: 10px;
`;

export const InstagramIcon = styled(FaInstagram)`
color: #fff;
width: 40px;
margin-top: 8px;
margin-bottom: 10px;
`;

export const YoutubeIcon = styled(FaYoutube)`
color: #fff;
width: 40px;
margin-top: 8px;
margin-bottom: 10px;
`;

export const LinkedinIcon = styled(FaLinkedin)`
color: #fff;
width: 40px;
margin-top: 8px;
margin-bottom: 10px;
`;

export const SnapchatIcon = styled(FaSnapchat)`
color: #fff;
width: 40px;
margin-top: 8px;
margin-bottom: 10px;
`;

export const GoogleIcon = styled(FaGoogle)`
color: #fff;
width: 40px;
margin-top: 8px;
margin-bottom: 10px;
`;