import React from 'react'
import { Link }  from 'react-router-dom'

const ButtonMailto = ({ mailto, label }) => {
  const handleToggle = (e) => {
    window.location = mailto,
    e.preventDefault()
  }
  return (
    <Link to="#" onClick = {handleToggle} rel="noopener">
        {label}
    </Link>
  )
}

export default ButtonMailto