import React, { useEffect, useState } from 'react';
import { apiUrl } from '../data';
import Subcard from './Subcard';
import PrintAll from './PrintAll';

const Cards = ({ filter }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
     
   
          setData(jsonData.data);
        
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className='mx-auto w-[1200px] flex flex-wrap gap-5  justify-center'>
      {filter==='All' && <PrintAll data={data} />}
     
      {filter !== 'All' && 
       data[filter].map((book)=>(
        <Subcard desc={book}/>
      ))
     
      }

       
    </div>
  );
};

export default Cards;
