import profile from '../Navigation/default-profile.png'
import '../Navigation/style.css';

const Profile = () => {
    return (
        <div className=''>
            <p className='m-10 font-semibold text-2xl'>Administrator</p>
            <div className='m-10 rounded-md bg-white p-5 shadow-lg'>
                <div className='flex'>
                    <div>
                        <img src={profile} alt='' className='rounded-full h-28 ml-2 mb-2'/>
                    </div>
                    <div className='mx-5'>
                        <p className='font-semibold'>Erismar Andreina Mendoza Marquez</p>
                        <p>Age</p>
                        <p>Location</p>
                        <p>Email</p>
                        <p>Project</p>
                    </div>
                </div>
            </div>
            <div className='m-10 rounded-md bg-white p-5 shadow-lg flex justify-between'>
                <p>You haven't published any books yet.</p>
                <button className='background-buttons flex'>Publish
                    <span className='material-symbols-rounded font-semibold'>add</span>
                    
                </button>
            </div>
        </div>
    )
}

export default Profile;