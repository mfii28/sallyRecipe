import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/search/' + input);
  };

  return (
    <div>
      <Header />
      <div className='flex justify-center items-center'>
        <form onSubmit={submitHandler} className='max-w-[800px] w-full px-4'>
          <div className='flex flex-col items-center'>
            <div className='flex flex-row w-full bg-transparent border-solid border-2 border-sky-500 rounded-2xl'>
              <input
                onChange={(e) => setInput(e.target.value)}
                type='text'
                className='w-full bg-transparent pl-6 py-4 rounded-l-2xl focus:outline-none'
                placeholder='Search on name, category, tags etc.'
              />
              <button type='submit' id='selectTheory' className='bg-blue-500 text-white rounded-r-2xl px-4'>
                <AiOutlineSearch className='search-button w-8 h-8' />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
