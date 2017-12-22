import React, { Component } from 'react'
import TodoTextInput from './TodoTextInput'

export default class TodoItem extends Component {    
    
    render() {
        return (
            <li>{ this.props.todo.description}</li>
        );
    }
}