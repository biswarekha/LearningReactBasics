import React from 'react';

const navbar = () => {
return (
     <div className='navbar'>
      <a href='#'> React Demo</a>
      <a className='active' href='#'>To Do </a>
      <a href='weather.html'>Weather</a>
      <a href='calculator.html'>Calculator</a>
     </div>
  
);
}

export default navbar;