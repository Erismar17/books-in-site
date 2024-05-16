import Books from "./Book-Card/Books"
import './style.css';

const ListBooks = () => {
    return (
        <div className="grid-books m-10">
            <Books/>
            <Books/><Books/><Books/><Books/><Books/><Books/><Books/><Books/><Books/><Books/><Books/><Books/>
        </div>
    )
}

export default ListBooks;