import React from 'react';
import Subcard from './Subcard';

const PrintAll = ({data}) => {
  return (
    <div className='flex flex-wrap gap-5  justify-center'>
      {Object.keys(data).map((topic)=>(
       
      
         data[topic].map((book)=>(
          <Subcard desc={book}/>
        ))
       

      ))}
    </div>
  );
}

export default PrintAll;
