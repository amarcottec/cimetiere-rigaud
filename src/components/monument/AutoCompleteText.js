import React, { Component } from 'react'
import './AutoCompleteText.css' 

export default class AutoCompleteText extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            suggestions: [],
            text: '',
        }
    }

    suggestionSelected(value){
        this.setState(() => ({
            text: value,
            suggestions: [],
        }));
    }

    onTextChanged = async (e) => {
        const { items } = this.props;
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0){ 
            suggestions = items.filter(v => v.toLowerCase().includes(value.toLowerCase()) );
        }
        this.setState(() => ({
            suggestions: suggestions,
            text: value,
        }));
    }

    renderSuggestions() {
        const { suggestions} = this.state;
        
        if(suggestions.length === 0){
            return null;
        }
        
        return (
            <ul>
            {suggestions.map((item, key) => <li id={key}  onClick={ () => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }
    
    render() {
        const {text} = this.state;
        return (
            <div className='AutocompleteText'>
                <input value={text} type='text' onChange={this.onTextChanged}/>
                {this.renderSuggestions()}
            </div>
        )
    }
}
