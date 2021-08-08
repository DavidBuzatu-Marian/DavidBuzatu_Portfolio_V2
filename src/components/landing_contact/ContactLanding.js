import React from 'react';
import Instagram from '../../img/instagram.svg';
import LinkedIn from '../../img/linkedin.svg';
import Dribbble from '../../img/dribbble.svg';
import StackOverflow from '../../img/stack-overflow.svg';

const socials = [
  {
    src: Instagram,
    name: 'Instagram',
  },
  {
    src: Dribbble,
    name: 'Dribbble',
  },
  {
    src: LinkedIn,
    name: 'LinkedIn',
  },
  {
    src: StackOverflow,
    name: 'Stack Overflow',
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
        <button className='btn btn-3d-hover btn-contact'>Contact me</button>
      </div>
      <div className='horizontal-delimiter' />
      <div className='follow-container'>
        {socials.map((social, idx) => (
          <div key={idx} className='social'>
            <img src={social.src} alt={social.name} />
            <p>{social.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactLanding;
