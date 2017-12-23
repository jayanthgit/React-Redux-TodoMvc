import React, { Component } from 'react'

export default class TodoTextInput extends Component {
    
    handleSave = text => {
        if(text.length != 0) {
            this.props.addTodo(text);
        }
    }
    
    render() {
        return (
            <input 
                type="text"
                placeholder={this.props.placeholder}
                onSave={this.handleSave} />
        );
    }
}