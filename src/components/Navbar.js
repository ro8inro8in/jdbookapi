import React from 'react';
import '../App';

function Navbar() {
  return (
    <div className='navbar'>
        {/* <div>
           <h1>The Book Store</h1> 
        </div> */}
        <div className='Home'>Home</div>
        <div className= 'Books'>Books</div>
        <div className= 'Mags'>Magazines</div>
        <div className ='E'>E-Books</div>
        <div className = 'Account'>Account</div>
     </div>
  )
}

export default Navbar;