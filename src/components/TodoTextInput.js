import React, { Component } from 'react'

export default class TodoTextInput extends Component {
    render() {
        return (
            <input 
                type="text"
                placeholder="Enter a task" />
        );
    }
}