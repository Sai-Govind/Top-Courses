import React, { useState } from 'react';
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Subcard = ({ desc }) => {
  const [showMore, setShowMore] = useState(false);
  const [toggle,settoggle]=useState(false);
  const toggleDescription = () => {
    setShowMore(!showMore);
  };
  const [msg,setmsg]=useState("Liked Succesfully");
  const handletoast=()=>{
    settoggle(!toggle);
      if(msg==='Liked Succesfully'){
        setmsg('Liked Removed');
      
      }
      else{
        setmsg('Liked Succesfully');
      }
      toast(msg);
  }

  return (
    <div className='flex flex-col bg-bgDark w-[300px] gap-3 rounded-md'>
         <ToastContainer />
      <div className='relative'>
      <img src={desc.image.url} width='100%' height='20%' alt={desc.title} />
      <button className=' absolute -bottom-3 right-2 bg-white w-[35px] h-[35px]  rounded-full flex items-center justify-center'
      onClick={()=>handletoast()}>
      {!toggle && <FcLike fontSize="1.75rem"  />}
      {toggle && <FcLikePlaceholder  fontSize="1.75rem"/>}
     
      </button>
      </div>
      
      <h3 className='text-white px-3 font-semibold text-lg leading-6'>{desc.title}</h3>
      <p className='text-white px-3 mb-3 text-base mt-2'>
        {showMore ? desc.description : `${desc.description.slice(0, 200)}...`}
        <span className='hover:cursor-pointer text-blue-500' onClick={toggleDescription}>
          {showMore ? '' : ' Know More'}
        </span>
        {showMore && (
          <span className='text-blue-500 hover:cursor-pointer' onClick={toggleDescription}>
            {' Know Less'}
          </span>
        )}
      </p>
   
  
    </div>
  );
};

export default Subcard;
