import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isScrolled = scrollPosition > 20;

    return (
        <nav className={`shadow-sm ${isScrolled ? 'bg-white' : 'bg-smokewhite'} px-40 fixed top-0 w-full z-10`}>
            <div className="container md:py-0">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className={`text-${isScrolled ? 'black' : 'white'} text-2xl font-bold`}>HighDream.</h1>
                    </div>
                    <div className={`text-${isScrolled ? 'black' : 'white'} hidden md:block`}>
                        <ul className='flex items-center gap-8 py-3 px-sm:py-5'>
                            <li><Link to="/aboutus" className={`inline-block py-3 hover:border-b-2 hover:text-secondary hover:border-secondary transition-colors hover:font-medium ${isScrolled ? 'text-black' : 'text-white'}`}>About Us</Link></li>
                            <li><Link to="/Business" className={`inline-block py-3 hover:border-b-2 hover:text-secondary hover:border-secondary transition-colors hover:font-medium ${isScrolled ? 'text-black' : 'text-white'}`}>Business</Link></li>
                            <li><Link to="/newspage" className={`inline-block py-3 hover:border-b-2 hover:text-secondary hover:border-secondary transition-colors hover:font-medium ${isScrolled ? 'text-black' : 'text-white'}`}>News</Link></li>
                            <li><Link to="/contact" className={`inline-block py-3 hover:border-b-2 hover:text-secondary hover:border-secondary transition-colors hover:font-medium ${isScrolled ? 'text-black' : 'text-white'}`}>Contact Us</Link></li>
                            <li></li>
                            <li key="language" className={`hover:text-secondary px-3 ${isScrolled ? 'text-black' : 'text-white'}`}>
                                <select id="language" className='bg-transparent'>
                                    <option value="english">En</option>
                                    <option value="spanish">Pt</option>
                                    <option value="french">Ar</option>
                                </select>
                            </li>
                            <li><button className={`btn btn-outline ${isScrolled ? 'btn-black' : 'btn-white'} hover:${isScrolled ? 'text-black' : 'text-secondary'}`}>Apply</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
