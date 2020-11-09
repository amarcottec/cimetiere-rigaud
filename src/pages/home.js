import React from 'react'
import '../App.scss'
import img from '../images/DSC_6573.JPG'
import Title from '../components/Title'
import '../components/monument/Monument.scss'

export default function home() {
    return (
        <div>
            <div className="filter-container">
                <Title title="Monuments funéraires de Rigaud" />
            </div>
            <div className="home">
                <p>Ce site vous permet de consulter la carte du cimetitère de Rigaud et pour chaque monument identifé par un numéro de lot vous pouvoir 
                une image du monument funéraire. 
                </p>
            </div> 
            <div className="home">
            <img src={img} alt="bcground" className="center"></img>
            </div>
            
        </div>
    )
}
