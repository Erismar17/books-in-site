import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logoGlobant from '../../assets/images/Globant.png';
import profile from './default-profile.png';
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
                        <div><Link to={'/'}><img src={logoGlobant} alt="" className="h-7 mt-1 mx-2"/></Link></div>

                        <div><input placeholder="Buscar libros..." className="bg-gray-200 rounded text-black p-2 px-5 w-80"/></div>

                        <div className='flex mb-1.5'>
                            <select class="background-buttons mr-3 text-center">
                                <option disabled selected>Categorías</option>
                                <option value="Fantasia">Fantasía</option>
                                <option value="Ciencia-Ficcion">Ciencia Ficción</option>
                                <option value="Crecimiento-Personal">Crecimiento Personal</option>
                                <option value="Finanzas">Finanzas</option>
                                <option value="Romance-Juvenil">Romance Juvenil</option>
                                <option value="Historia">Historia</option>
                                <option value="Aventura">Aventura</option>
                                <option value="Aventura">Terror</option>
                                <option value="Esoterico">Esoterico</option>
                            </select>

                            <Link to={'/perfil'}>
                                <div className='background-buttons flex mr-5'>
                                    <button className="flex mr-2 mt-0.5">Perfil
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