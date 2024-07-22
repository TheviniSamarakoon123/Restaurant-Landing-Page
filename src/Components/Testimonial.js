import React from 'react';
import ProfilePic from '../Assets/thevini_samarakoon.png';
import { AiFillStar } from 'react-icons/ai';

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Testimonial</p>
        <h1 className='primary-heading'>What They Are Saying</h1>
        <p className='primary-text'>
          Lorem ipsum dolor sit amet consectetur. Not large or elite typography. Pain is troublesome, with great ease at the edge as much.
        </p>
      </div>
      <div className='testimonial-section-bottom'>
        <img src={ProfilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Not large or elite typography. Pain is troublesome, with great ease at the edge as much.
        </p>
        <div className='testimonials-stars-container'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Thevini Samarakoon</h2>
      </div>
    </div>
  );
};

export default Testimonial;