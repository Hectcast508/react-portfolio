import React from 'react';

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
                    href='#resume' onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                  >Resume</a></li>
            </ul>
        </nav>
    );
}