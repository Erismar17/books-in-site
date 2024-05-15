import { Link } from 'react-router-dom';
import book from './book.jpg';

const Books = () => {
    return (
        <div className='book-card'>
            <Link /* to={`/${book.title}`} */>
                <div className='bg-white rounded-md p-2 flex flex-col text-center shadow-lg hover:underline'>
                    <div className='flex justify-center'>
                        <img src={book} alt='' className='w-32 rounded-md mb-2 shadow-lg'/>
                    </div>
                    <p>Antes de Diciembre</p>
                    <p>Joana Marcús</p>
                    <p>Publicado por</p>
                    <Link to={'perfil'}>
                        <p className='font-semibold'>Erismar Mendoza</p>
                    </Link>
                </div>
            </Link>
        </div>
    )
}

export default Books;