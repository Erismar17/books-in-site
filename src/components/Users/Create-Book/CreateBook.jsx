const CreateBook = ({isOpen, onClose}) => {
    if (!isOpen) return null;

    const createBook = (event) => {
        event.preventDefault();
        console.log('Book created!');
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-10'>
            <form onSubmit={createBook}>
                <div className="mt-10 flex items-center justify-center w-full">

                </div>
            </form>
        </div>
    )
}

export default CreateBook;