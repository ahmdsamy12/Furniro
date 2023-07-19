import React from 'react'
import { Link } from 'react-router-dom'
import "./main-head-page.css"

const MainHead = (props: {tiltle: string, para: string}) => {
  return (
    <div className='main-head-page'>
        <div className='page-content'>
            <h3>{props.tiltle}</h3>
            <p><Link to="/">Home</Link> &gt; {props.para}</p>
        </div>
    </div>
    )
}

export default MainHead