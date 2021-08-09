import React from 'react';
import Instagram from '../../img/instagram.svg';
import LinkedIn from '../../img/linkedin.svg';
import Dribbble from '../../img/dribbble.svg';
import StackOverflow from '../../img/stack-overflow.svg';
import MailTo from './MailTo';

const socials = [
  {
    src: Instagram,
    name: 'Instagram',
    link: '#',
  },
  {
    src: Dribbble,
    name: 'Dribbble',
    link: 'https://dribbble.com/David_Buzatu',
  },
  {
    src: LinkedIn,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/david-buzatu-160620198/',
  },
  {
    src: StackOverflow,
    name: 'Stack Overflow',
    link: 'https://stackoverflow.com/users/11023871/david-buzatu',
  },
];

const ContactLanding = () => {
  return (
    <div className='container-contact'>
      <div className='container-contact-header'>
        <div className='container-contact-header-title'>
          <h2>Got your interest?</h2>
          <p>Reach out to me. Possibilities are endless.</p>
        </div>
        <button className='btn btn-3d-hover btn-contact'>
          <MailTo
            email='davidm.buzatu@gmail.com'
            subject='Hi! I am writing from your portfolio website'
          >
            <p>Contact me</p>
          </MailTo>
        </button>
      </div>
      <div className='horizontal-delimiter' />
      <div className='follow-container'>
        {socials.map((social, idx) => (
          <div key={idx} className='social'>
            <img src={social.src} alt={social.name} />
            <p>
              <a href={social.link} target='_blank' rel='noreferrer'>
                {social.name}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactLanding;
