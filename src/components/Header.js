import React, { Component }  from 'react';
import PropTypes from 'prop-types'
import Button from './Button'
import Tasks from './Tasks'
const Header = () => {
  return (
    
    <div  className='Header'>
           
        <h1>Task Tracker</h1>
       
        <Button color="blue"  text="Add" />
        <Tasks/>
    </div>
  )
}

// Header.PropTypes ={
//     title:  PropTypes.string.isRequired
// }
export default Header