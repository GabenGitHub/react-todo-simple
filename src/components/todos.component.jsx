import React from 'react';

const Todos = ({ todos, deleteTodo }) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className='collection-item' key={todo.id} >
                    <span 
                        onClick={() => { deleteTodo(todo.id) }} 
                        style={
                            {
                                cursor: 'pointer', 
                                color: 'red',
                                padding: '3px 5px',
                                paddingLeft: '9px',
                                margin: '0 10px',
                                border: '1px solid red',
                            }
                        }> X </span>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <h5 className='center'>You have no todo's left, yay!</h5>
    )
    return(
        <div className='todos collection'>
            {todoList}
        </div>
)};

export default Todos;