import React from 'react';

class AddTodo extends React.Component {
    state = {
        id: '',
        content: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({id: '', content: ''})

    };

    handleChange = (event) => {
        const content = event.target.value
        this.setState({
            id: Math.random(),
            content
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text' 
                        name='content'
                        onChange={this.handleChange}
                        value={this.state.content}
                    />
                </form>
            </div>
        )
    }
};

export default AddTodo;