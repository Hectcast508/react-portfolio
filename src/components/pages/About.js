import React from 'react';


export default function About() {
  return (
    <div className='about-title'>
      <h1 className='sec-title'>About</h1>
      <div className='about-sec'>
        <img className='aboutImage' src={require('../../assets/about-photo.png')} alt='about-img'/>
        <p>
        Full stack web developer continuously learning new technologies and skills to improve in my professional career as well in my personal projects. What motivated me to be a web developer was knowing all the amazing projects my friends would show me and that inspired me to take the first steps. I seek to be a developer that designs intuitive applications. Attended UCR Bootcamp Extension where I recently earned a certificate in full stack development with new skills developed in JavaScript, Express , MongoDB, React.js, Node, and responsive web design. Throughout every project I look for issues that I can improve and find ways to code more efficiently. I worked on a team of four to develop a single-page MERN app that assists high school students and faculty with being able to schedule appointments for specific subjects. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
        </p>
      </div>
    </div>
  );
}
