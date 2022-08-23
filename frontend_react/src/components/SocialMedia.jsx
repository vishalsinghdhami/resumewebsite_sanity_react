import React from 'react';
import { BsGithub, BsInstagram ,BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
     <a href="https://www.github.com/vishalsinghdhami"> <BsGithub /></a>
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
  <a href="https://www.linkedin.com/in/vishal-singh-dhami/"><BsLinkedin/></a>
</div>
    <div>
     
  <a href="https://www.instagram.com/v.s.dhami/">   <BsInstagram/> </a>
    </div>
  </div>

);

export default SocialMedia;

   