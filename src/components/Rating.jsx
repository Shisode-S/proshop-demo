import React from 'react'
import { FaStar , FaStarHalfAlt , FaRegStar } from 'react-icons/fa'

const spanStyles = {
    verticalAlign: 'middle',
    color: 'yellow',
  };
const Rating = ({value , text}) => {
  return (
    <div style={{margin: "0.1rem"}}>
      <span style={spanStyles}>
        { value >=1 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar /> }
      </span>
      <span style={spanStyles}>
        { value >=2 ? <FaStar /> : value >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar /> }
      </span>
      <span style={spanStyles}>
        { value >=3 ? <FaStar /> : value >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar /> }
      </span>
      <span style={spanStyles}>
        { value >=4 ? <FaStar /> : value >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar /> }
      </span>
      <span style={spanStyles}>
        { value >=5 ? <FaStar /> : value >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar /> }
      </span>
      <span style={{ fontSize: '0.8rem', fontWeight: 600 , paddingLeft: '0.5rem' }}>{text ? text : null}</span>
    </div>
  )
}

export default Rating
