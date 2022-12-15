import React from 'react';
import './SearchBox.css'

const SearchBox = (props) =>{
  return (
   <>
   <div className='heading'>
    <h1> Bilal Here! </h1>
    </div>
    <form>
        <div className='input-box'>
            <input placeholder='search here... '/>
        </div>
    </form>
    
   </>
  )
}

export default SearchBox;
