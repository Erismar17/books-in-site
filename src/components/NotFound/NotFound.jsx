import { Link } from 'react-router-dom';
import './style.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <p>¡Sorry!</p>
            <p>404 Not Found</p>
            <p>The page you are looking for doesn't exist</p>
            <Link to={'/'}>
                <button className='go-back rounded-lg'>Go back</button>
            </Link>
        </div>
    )
}

export default NotFound;