import React, { Component } from 'react'
import './Monument.scss'
import {monumentData} from '../../data'

export default class MonumentFullPage extends Component {
    
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
          slug: this.props.match.params.slug
          
        };

        console.log('allo ' + this.state.slug);
    }
  
    getMonument = slug => {
        console.log(slug);
        let tempMonuments = [...monumentData];
        const monument = tempMonuments.find(monu => monu.slug === slug);
        return monument;
      };
  

    render() {
        const monument = this.getMonument(this.state.slug);
        const {id, img} = monument;
        return (
            <div className="imgFull">
            <img key={id} src={img} alt=''/>
            </div>
        )
    };
};
