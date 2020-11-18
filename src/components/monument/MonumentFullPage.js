import React, { Component } from 'react'
import './Monument.scss'
import {monumentData} from '../../data'
import Loading from "../Loading"
import {MonumentContext} from '../../context'

export default class MonumentFullPage extends Component {
    static contextType = MonumentContext;

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
          slug: this.props.match.params.slug
          
        };
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
        const {loading} = this.context;
        
        if(loading){
            return <Loading/>
        }
        
        return (
            <div className="imgFull">
                <img key={id} src={img} alt=''/>
            </div>
        )
    };
};
