import './style.css';
import { Link } from 'react-router-dom';

const Menu = ({ open, handleMenuClick }) => {
  const handleOpen = () => {
    handleMenuClick();
  };

  const Options = [
    { title: "Books", to:"/books", src:<span className="material-symbols-rounded mr-5">book</span>},
  ];

  return (
    <div>
        <div className={`menuBarra`}>
          <button onClick={handleOpen} className='menuBarra-button'>
            <span className={`fila1 ${open ? 'fila1Animacion' : ''}`}></span>
            <span className={`fila2 ${open ? 'fila2Animacion' : ''}`}></span>
            <span className={`fila3 ${open ? 'fila3Animacion' : ''}`}></span>
          </button>
          <ul className="listaMenu mt-10">
            {Options.map((menu, index) => (
              <li key={index} className={`text-base flex my-11 items-center gap-x-4 cursor-pointer rounded-md ${menu.gap ? 'mt-10' : 'mt-10'}`} >
                <Link to={menu.to}>
                  <div className='flex justify-between'>
                    {menu.src}
                    <span className={`${!open && 'hidden'} duration-200`}> {menu.title} </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
}

export default Menu;