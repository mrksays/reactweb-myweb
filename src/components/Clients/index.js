import React from 'react'
import Slider from "react-slick";
import {ClientsContainer, ClientH1, ClientsRow, ClientImg} from './ClientsElements'
import icon1 from '../../assets/Blockworks.png'
import icon2 from '../../assets/coindesk-logo.png'
import icon3 from '../../assets/CoinGecko.svg'
import icon4 from '../../assets/infoq-logo.svg'
import icon5 from '../../assets/NASDAQ_Logo.svg'


const Clients = () => {
    var settings = {
   
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 3000,
          cssEase:'linear',
          infinite: true,
          arrows: true,
          dots: false,
          pauseOnHover: true,
          pauseOnFocus: true, 
          pauseOnDotsHover: true,
          focusOnSelect: false,
          responsive: [{
            breakpoint: 768,
            settings: {
              slidesToShow: 4
            }
          }, {
            breakpoint: 520,
            settings: {
              slidesToShow: 2
            }
          }]
        };
  return (
    <>
    <ClientsContainer>
    <ClientH1>FEATURED IN</ClientH1>
        <ClientsRow>
        <Slider {...settings}>
            <ClientImg src={icon1}/>
            <ClientImg src={icon2}/>
            <ClientImg src={icon3}/>
            <ClientImg src={icon4}/>
            <ClientImg src={icon5}/>
            <ClientImg src={icon1}/>
            <ClientImg src={icon2}/>
            <ClientImg src={icon3}/>
            <ClientImg src={icon4}/>
            <ClientImg src={icon5}/>
            </Slider>
        </ClientsRow>
    </ClientsContainer>
    </>
  )
}

export default Clients