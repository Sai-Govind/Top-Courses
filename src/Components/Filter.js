import React, { useState } from 'react';

const Filter = ({ filter, handlefilter }) => {
  const arr = ["All", "Development", "Business", "Design", "Lifestyle"];
  const [active, setActive] = useState(0);

  return (
    <div className='flex gap-5 justify-center my-4 mb-10'>
      {arr.map((topic, key) => (
        <button
          key={key}
          className={`font-medium text-white bg-black p-2 cursor-pointer bg-opacity-75   rounded-md ${active === key ? 'border border-white' : ''}`}
          onClick={() => {
            handlefilter(topic);
            setActive(key);
          }}
        >
          {topic}
        </button>
      ))}
    </div>
  );
}

export default Filter;
