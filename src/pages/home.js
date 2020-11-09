import React from 'react'
import img from '../images/DSC_6573.JPG'
import Title from '../components/Title'
import '../home.scss'

export default function home() {
    return (
        
        
        <>
            <div className="filter-container">
                <Title title="Monuments funéraires de Rigaud" />
            </div>
            <div className="wrapper">
                <article class="img-info">
                    <p>Ce site vous permet de consulter la carte du cimetitère de Rigaud et pour chaque monument identifé par un numéro de lot vous pouvez 
                    voir une image du monument funéraire.</p> 
                    <p>Consulter le menu carte pour voir la carte et appuyer sur la case correspondante au momument désiré.
                    En appuyant sur la case, une photo du monument va apparaitre.  
                    </p>
                </article> 
            </div>
            <div className="img-home">
                <img src={img} alt="bcground"></img>
            </div>
            
        </>
    )
}
