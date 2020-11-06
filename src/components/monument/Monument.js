import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  './Monument.scss';
import imgCarte from '../../images/carte-cimetiere.jpg';
import Title from '../Title'

export default class Monument extends Component {
    
    state = {
        slug: '1'
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState(
            {
                [name]: value
            },
        );
    };

   
    
    render() {
        const handleChange = this.handleChange;
        const slug = this.state.slug;
        return (
            <>
               <section className="filter-container">
                    <Title title="Photo des monuments funéraires" />
					<form className="filter-form">
                    <div className="form-group">
                            <div className="size-input">
                                <label htmlFor="noCase">Numero de la case</label>
                                <input
                                    type="text"
                                    name="slug"
                                    value={slug}
                                    onChange={handleChange}
                                    className="size-input"
                                />
                                <Link to={`/monument/${slug}`} className="btn-primary size-input" >
                                        Afficher Photo
                                </Link>
                            </div>
                        </div>
					</form>
                </section>    
               <article className="monument">
                    <div className="img-container">
                        <img src={imgCarte} alt='monument'/>
                    </div>
            </article>
            </>
        );
    };
};


export const MemoixzedMonument = React.memo(Monument);