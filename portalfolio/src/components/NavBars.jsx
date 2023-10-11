import { Link } from 'react-scroll';
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useRef, useEffect } from 'react';

const NavBars = () => {
    
    const [showMenu, setShowMenu] = useState(false);

    const menuRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (showMenu && menuRef.current && !menuRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [showMenu]);

    const icon = (
        <span className="text-4xl md:hidden" onClick={toggleMenu}>
            { showMenu ? <AiOutlineClose />  : <HiMenuAlt3 /> }
        </span>
    );
    

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top  ">
                <div className=' md:flex '>{icon}</div>
                

                <ul className={`xl:flex xl:flex-row xl:bg-transparent md:bg-transparent font-Merriweather font-semibold ${showMenu ? 'block' : 'hidden'} md:flex md:flex-col border border-t-2 bg-clip-border  p-2 pr-56 mr-5 rounded-lg `}>
                    <li className='mr-5'>
                        <Link to="home" smooth={true} duration={1000} className='text-blue-500 hover:underline text-2xl '>Home</Link>
                    </li>
                    <hr className=' border-t border-gray-400  w-full '/>
                    <li className='mr-5'>
                        <Link to="about" smooth={true} duration={1000} className='text-blue-500 hover:underline text-2xl'>About</Link>
                    </li>
                    <hr className=' border-t border-gray-400  w-full '/>
                    <li className='mr-5'>
                        <Link to="contact" smooth={true} duration={1000} className='text-blue-500 hover:underline text-2xl'>Contacts</Link>
                    </li>
                    <hr className=' border-t border-gray-400  w-full '/>
                    <li className='mr-5'>
                        <Link to="testimonies" smooth={true} duration={1000} className='text-blue-500 hover:underline text-2xl'>Testimonials</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBars;
