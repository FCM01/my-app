import React, { Component }  from 'react';
import PropTypes from 'prop-types'

const Button = ({color ,text}) => {
    const Click =(e)=>{
        console.log("helloe")
    }
  return <button onClick={Click} className='btn' style={ {backgroundColor: color}}>{text}</button>

}
Button.defaultProps = {
    color: 'blue'
}
Button.propTypes ={
    text: PropTypes.string,
    color: PropTypes.string 
}

export default Button