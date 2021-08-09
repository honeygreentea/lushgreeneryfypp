import React from 'react';
import '../App.css';
import './mainbutton.css';

function MainButton() {
    return (
      <div className='hero-container'>
        <h1>Lushgreenery Insurance</h1>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Advisors
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            Manage Plans 
          </Button>
        </div>
      </div>
    );
  }
  
  export default HeroSection;