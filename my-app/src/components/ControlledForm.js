// Learning outcomes:
// - controlled form components
// - work with different input types
// - managing input field values
// - data handling upon form submission


import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "",
         category: "website",
         comments: "",
      }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCategory = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    /* Computed property name */

    // handleChange = (event) => {
    //     const {name, value} = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your name:</label>
                    <input 
                        value={this.state.name}
                        onChange={this.handleNameChange} 
                        id="id-name" 
                        name="name" 
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="id-category">Query category:</label>
                    <select 
                        id="id-category"
                        name="category"
                        value={this.state.category}
                        onChange={this.handleCategory}
                    >
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments:</label>
                    <textarea
                        value={this.state.comments}
                        onChange={this.handleComments} 
                        id="id-comments" 
                        name="comments"
                    />
                </div>
                <input 
                    type="submit" 
                    value="Submit"
                />
            </form>
        </div>
        )
    }
}

export default ControlledForm