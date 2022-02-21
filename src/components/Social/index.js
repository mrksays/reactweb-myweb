import React from 'react'
import {SocialContainer, SocialAside, SocialUl, SocialLi, SocialA, FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon, SnapchatIcon, GoogleIcon} from './SocialElements'

const Social = () => {
  return (
    <>
    <SocialContainer>
        <SocialAside>
        <SocialUl>
            <SocialLi>
                <SocialA>
                    <FacebookIcon />
                    <InstagramIcon />
                    <YoutubeIcon />
                    <LinkedinIcon />
                    <SnapchatIcon />
                    <GoogleIcon />
                </SocialA>
            </SocialLi>
        </SocialUl>
        </SocialAside>
    </SocialContainer>
    </>
  )
}

export default Social