import { useState } from "react";
import book from '../Book-Card/book.jpg';
import { Link } from "react-router-dom";
import './style.css';

const BookDetail = () => {
    const [isAvailable] = useState(true);

    return (
        <div className='bg-white rounded-md p-2 m-10 flex justify-between text-center shadow-lg information-book'>
            <div className='max-w-60 my-5'>
                <img src={book} alt='' className='w-60 max-w-64 m-2 rounded-md shadow-lg'/>
            </div>
            <div className='flex flex-col justify-between m-5'>
                <div className='text-left'>
                    <p className='text-3xl font-semibold'>Antes de Diciembre Joana Marcús</p>
                    <p className='text-3xl font-semibold mt-6'>Synopsis</p>
                    <p className='text-justify mt-2'>Para Jenna Brown, su primer año en la Universidad suponía alejarse de su familia y sus amigos y enfrentarse al mundo por primera vez en su vida. Su novio le había dejado claras sus intenciones: a partir de ese momento, tenían una relación a distancia y abierta. Ambos podían hacer lo que quisieran porque sabían que se querían el uno al otro. Así que no pasaba nada si no dejaba de acercarse al mejor amigo del novio de su compañera de habitación, ¿no? De todos modos, ¿qué importaba si estaba con él en ausencia de su novio? Todo volvería a la normalidad en diciembre. ¿Cambiaría algo? Tenía hasta entonces para descubrirlo.</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <p className={`${isAvailable ? 'button-available' : 'button-notAvailable'}`}>
                            {isAvailable ? 'Available' : 'No Available'}
                        </p>
                        <div>
                            <p className='bg-gray-300 rounded mt-2'>Romance</p>
                        </div>
                    </div>
                    
                    <div className='flex'>
                        <p className='text-2xl mt-1 mr-5'>4</p>
                        <p className='text-3xl text-yellow-400'>★★★★☆</p>
                    </div>
                </div>
                <div className='flex justify-between mt-10'>
                    <div className='text-left'>
                        <p>Published by</p>
                            <Link to={'/profile'}>
                                <p className='font-semibold profile-hover'>Erismar Andreina Mendoza Marquez</p>
                            </Link>
                    </div>
                    <div>
                        <p className='button-available rounded'>Prestar
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetail;