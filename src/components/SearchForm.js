import React, { Component } from 'react';
import * as GLOBAL from "../global/Constants";

class SearchForm extends Component {
    state = {
        inputMovie:''
    }
    handleChange = (e) => {
        this.setState({
            inputMovie: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${GLOBAL.BASE_URI_OMDB}?apikey=${GLOBAL.API_KEY}&s=${this.state.inputMovie}`)
        .then(res=> res.json())
        .then( results => {
            console.log(results)
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" onChange={this.handleChange} placeholder="Write a movie name" />
                    </div>
                </div>

            </form>
        )
    }
   
}
export default SearchForm