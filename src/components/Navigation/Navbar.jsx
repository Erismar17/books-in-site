import logoGlobant from '../../assets/images/Globant.png';
import { Link, Outlet } from 'react-router-dom';
import profile from './default-profile.png';
import { useState } from 'react';
import Menu from './Menu/Menu';
import './style.css';

const Navbar = ({ children }) => {
    const [open, setOpen] = useState(false);

    const handleMenuClick = () => {
        setOpen(!open);
    }
    return (
        <header>
            <nav className="flex min-h-screen">
                <section className={`${open ? 'w-44 duration-300' : 'w-20 duration-300'}`}>
                    <Menu open={open} handleMenuClick={handleMenuClick} />
                </section>

                <div className="flex flex-col flex-1">
                    <div className="flex justify-between mt-1.5 shadow-lg">
                        <div><Link to={'/'}><img src={logoGlobant} alt="" className="h-7 mt-2 mx-2"/></Link></div>

                        <div className='bg-gray-200 rounded h-10 flex'>
                            <input placeholder="Search" className="bg-gray-200 rounded text-black p-2 px-5 w-80"/>
                            <button>
                                <span className="material-symbols-rounded mt-1 mr-2">search</span>
                            </button>
                        </div>

                        <div className='flex mb-1.5'>
                            <select class="background-buttons mr-3 text-center">
                                <option disabled selected>Catalogue</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Science-fiction">Science Fiction</option>
                                <option value="Personal-growth">Personal growth</option>
                                <option value="Finance">Finance</option>
                                <option value="Romance">Romance</option>
                                <option value="History">History</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Terror">Terror</option>
                                <option value="Esoteric">Esoteric</option>
                            </select>

                            <Link to={'/profile'}>
                                <div className='background-buttons flex mr-5'>
                                    <button className="flex mr-2 mt-0.5">Profile
                                    </button>
                                    <img src={profile} alt='' className='h-7 rounded-full'/>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 bg-gray-200">
                        {children}
                        <Outlet/>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;