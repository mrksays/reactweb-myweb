import React from 'react';
import Dp from '../../assets/dp.jpg'
import { SecondaryNav, SecondaryNavBG, SecondaryWrap, SecondaryContentContainer, SecondaryContent, DisplayImgLink, DisplayImg, SecondaryP, SecondaryButton, ArrowRight } from './SecondaryElements';

const Secondary = () => {
    
  return (
<>
<SecondaryNav>
    <SecondaryNavBG>
        <SecondaryWrap>
            <SecondaryContentContainer>
                <SecondaryContent>
                    <DisplayImgLink>
                        <DisplayImg src={Dp}/>
                    </DisplayImgLink>
                    <SecondaryP>
                    Smartnet: Smart Contracts are Coming to Aleph Zero 📜
                    </SecondaryP>
                    <SecondaryButton>
                        Learn More <ArrowRight />
                    </SecondaryButton>
                </SecondaryContent>
            </SecondaryContentContainer>
        </SecondaryWrap>
    </SecondaryNavBG>
</SecondaryNav>
</>
  )
}

export default Secondary