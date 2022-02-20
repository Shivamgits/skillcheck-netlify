import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Header.css"

const Header = () => {
  return (
    <div className="header">
        
        <Link to ="/" className="title"> Intutive Quiz Hub</Link>
        <hr className="divider"/>
    </div>
  )
}

export default Header