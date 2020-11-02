import React, { Component } from 'react'
import {monumentData} from '../data'
import Monument from '../monument/Monument'
import './Monuments.scss'

export default class Monements extends Component {
    
    state = {
        monuments: monumentData
        
    };
    
    render() {
        const {monuments} = this.state;
        return (
            <section className="Monuments"> 
              {monuments.map(monument =>{
                  return(<Monument key={monument.id} monument={monument}  />
                )
              })}
            </section>
        )
    }
}
