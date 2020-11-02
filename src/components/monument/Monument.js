import React, { Component } from 'react'
import  './Monument.scss'

export default class Monument extends Component {
    
    state = {
        showInfo:true
    }

    handleInfo = () => {
        this.setState({showInfo: !this.state.showInfo })
   }

    render() {
        const {img,name,info} = this.props.monument;
        return (
            <article className="monument">
            <div className="img-container">
                <img src={img} 
                alt=''
                />
            </div>
            <div className="monument-info">
                <h4>{name}</h4>
                <h5>info{" "} 
                    <span onClick={this.handleInfo}>
                        <i class="fas fa-caret-square-down"></i>
                    </span> 
                </h5>
                {this.state.showInfo  && <p>{info}</p>} 
            </div>
        </article>
        )
    }
}
