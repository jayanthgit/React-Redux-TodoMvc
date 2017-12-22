import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class MainSection extends Component {
    todoItems = [
        { 
            id: 1,
            description:'todo1'
        },
        { 
            id: 2,
            description:'todo2'
        },
        { 
            id: 3,
            description:'todo3'
        },
        { 
            id: 4,
            description:'todo4'
        }
    ];
    
    render() {
        return (
            <section>
                <ul>
                {
                    this.todoItems.map(todo => {                    
                        return <TodoItem key={todo.id} todo={todo} />
                    })
                }
                </ul>   
            </section>
        );
    }
}