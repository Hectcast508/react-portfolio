import React from 'react';
import Resume from '../assets/Resume.pdf'

export default function Nav({currentPage, handlePageChange}){
    return (
        <nav className='nav nav-section'>
            <ul className='nav-items'>
                <li>
                  <a 
                    href='#about' onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                  >About</a>
                </li>
                <li>
                <a 
                    href='#portfolio' onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                  >Portfolio</a>
                </li>
                <li>
                <a 
                    href='#contact' onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                  >Contact</a>
                </li>
                <li><a 
                    href={Resume} rel="noopener noreferrer" target="_blank" >Resume</a></li>
            </ul>
        </nav>
    );
}