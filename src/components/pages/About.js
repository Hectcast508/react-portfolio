import React from 'react';


export default function About() {
  return (
    <div className='about-title'>
      <h1 className='sec-title'>About</h1>
      <div className='about-sec'>
        <img className='aboutImage' src={require('../../assets/about-photo.png')} alt='about-img'/>
        <p>
        I am currently working in for a warehouse as a Equipment Operator. I've always been hard working and never let time go to waste, seeking better opportunities that come. Eager to learn more, getting close to perfection as a goal, really good team player and always on time. I am look to further my knowledge about coding, I have become very interested and would love to better myself in this work field. Willing to accept any offers that will help me reach my goals and teach me more ways to succeed in this career.
        </p>
      </div>
    </div>
  );
}
