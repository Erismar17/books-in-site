import { Link } from 'react-router-dom';
import book from './book.jpg';
import { useState } from 'react';
import './style.css';

const Books = () => {
    const [state] = useState(true);

    return (
        <div className='book-card'>
            <Link to={'/detail'} /* to={`/${book.title}`} */>
                <div className='bg-white rounded-md p-2 flex text-center shadow-lg information-book'>
                    <img src={book} alt='' className='w-32 rounded-md mb-2 shadow-lg'/>
                    <div className='mx-6 flex flex-col justify-evenly '>
                        <div>
                            <p>Antes de Diciembre</p>
                            <p>Joana Marcús</p>
                        </div>
                        <p className={`${state ? 'button-available' : 'button-notAvailable'}`}>
                            {state ? 'Disponible' : 'No disponible'}
                        </p>
                        <div className=''>
                            <p>Published by</p>
                            <p className='font-semibold'>Erismar Andreina Mendoza Marquez</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Books;