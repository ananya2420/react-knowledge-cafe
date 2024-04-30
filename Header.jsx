import react from 'react'
import profile from '../..assets/images/profile.png'



const header=()=>{
    return(
        <div className='flex justify-between items-center p-4 mx-4 border-b-2 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold'>knowledge cafe</h1>
            <img src={profile} alt=""/>
        </div>
    );
};