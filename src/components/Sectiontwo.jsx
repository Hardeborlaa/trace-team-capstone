import React from 'react';
import two from '../assets/two.png';
import three from '../assets/three.png';
import four from '../assets/four.png';
import ten from '../assets/ten.png';


const Sectiontwo = () => {
  return (
    <div className='min-h-screen w-[100%] mx-auto px-24 grid grid-cols-2 gap-6'>
      <div>
        <img src={two} className="col-span-2" alt=""/>
            <div className='grid grid-cols-2 py-4'>
                <img src={three} alt="" />
                <img src={four} alt="" />
            </div>
      </div>
      <div>
        <img src={ten} className="row-span-1 w-[71%] h-auto img-ten" alt="" />
      </div>    
      </div> 
             
         
          
          
  
  )
}

export default Sectiontwo