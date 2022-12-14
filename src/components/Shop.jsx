import React from "react";
import Women from '../assets/Women.jpeg';


const Shop = () => {
    return (  
        // <div className="max-w-[1440px] mx-auto">
        //     <div className="relative">
        //         <div className="absolute w-full h-full text-black-200 max-h-[500px] sm:inset-12 lg:inset-44 my-16">
        //             <h3>OWN THE DAY</h3>
        //             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold my-3">TACHEN 19</h1>
        //             <button className="bg-black text-white w-[200px] rounded-md font-medium mx-auto md:mx-0 py-3">SHOP COLLECTION</button>
        //         </div>
        //         <img className="w-full max-h-[500px] object cover" src= {Women} alt="cannot load" />
        //     </div>
        // </div>

        <div className='mt-32 relative'>
            <img src={Women} alt="" className='w-full'/>
            <div className='absolute sm:top-48 lg:top-96 sm:left-20 lg:left-40'>
            <p className='text-gray-900 sm:text-sm lg:text-2xl font-medium mt-4 pb-3'>OWN THE DAY</p>
                <h1 className='sm:text-4xl lg:text-7xl font-extrabold text-gray-900 pb-3'>TACHEN 19</h1>
                <div className='mt-2'>
                    <button className='bg-gray-900 px-6 py-2 text-white rounded-md'>SHOP COLLECTION</button>
                </div>
            </div>
        </div>
            
    );
}
 
export default Shop;