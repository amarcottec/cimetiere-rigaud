import React from 'react'
import '../App.scss'
import img from '../images/DSC_6573.JPG'
export default function home() {
    return (
        <div>
            <img 
            className="home"
            src={img} alt="bcground"></img>
        </div>
    )
}
