import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: true
      }
    }
    
    render() {
        return (
        <div>
            <h1>{this.state.isLoaded ? 'Data loaded' : 'Loading...'}</h1>
            {this.state.isLoggedIn ? (
                <div>
                    <p>Welcome to the site! Please complete the steps below:</p>
                    <ol>
                        <li>confirm your email</li>
                        <li>complete your profile</li>
                        <li>subscribe to the newsletter</li>
                    </ol>
                </div>
            ) : (<p>please sign in</p>)}
        </div>
        )
    }
    }

export default ConditionalRenderingClass