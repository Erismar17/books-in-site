import profile from '../Navigation/default-profile.png'
import '../Navigation/style.css';
const Profile = () => {
    return (
        <div className=''>
            <div className='m-10 rounded-md bg-white p-5 shadow-lg'>
                <div className='flex'>
                    <div>
                        <img src={profile} alt='' className='rounded-full h-28 ml-2 mb-2'/>
                    </div>
                    <div className='mx-5'>
                        <p className='font-semibold'>Erismar Andreina Mendoza Marquez</p>
                        <p>Edad</p>
                        <p>Locación</p>
                        <p>Correo</p>
                        <p>Proyecto</p>
                    </div>
                </div>
                
            </div>
            <div className='m-10 rounded-md bg-white p-5 shadow-lg flex justify-between'>
                <p>No has publicado ningún libro aún</p>
                <button className='background-buttons flex'>Publicar
                    <span className='material-symbols-rounded font-semibold'>add</span>
                </button>
            </div>
        </div>
    )
}

export default Profile;