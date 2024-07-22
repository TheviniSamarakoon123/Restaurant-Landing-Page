import React from 'react';
import Navbar from './Navbar';
import Bannerbackground from '../Assets/home-banner-background.png';
import BannerImage from '../Assets/home-banner-image.png';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                 <img src={Bannerbackground} alt="" />
            </div>
            <div className='home-text-section'>
                <h1 className='primary-heading'>
                Your Favourite Food Delivered Hot & Fresh
                </h1>
                <p className='primary-text'>
                Healthy switcher chefs do all the prep work, like peeling, chopping & marinating so that you can cook fresh food.
                </p>
                <button className='secondary-button'>
                  Order Now <FiArrowRight />{' '}
                </button>
            </div> 
            <div className='home-image-section'>
               <img src={BannerImage} alt="" />
            </div>
       </div>
    </div>
  )
}

export default Home