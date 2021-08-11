import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import FacebookIcon from '../../img/facebook.svg';
import TwitterIcon from '../../img/twitter.svg';
import LinkedInIcon from '../../img/linkedin_dark.svg';

const ShareOnSocials = ({ blogTitle }) => {
  return (
    <div className='container-socials'>
      <FacebookShareButton
        quote={`David's blog: ${blogTitle}`}
        url={window.location.href}
      >
        <img src={FacebookIcon} alt='Facebook' />
      </FacebookShareButton>
      <TwitterShareButton
        title={`David's blog: ${blogTitle}`}
        url={window.location.href}
      >
        <img src={TwitterIcon} alt='Twitter' />
      </TwitterShareButton>
      <LinkedinShareButton
        title={`David's blog: ${blogTitle}`}
        url={window.location.href}
      >
        <img src={LinkedInIcon} alt='Twitter' />
      </LinkedinShareButton>
    </div>
  );
};

export default ShareOnSocials;
