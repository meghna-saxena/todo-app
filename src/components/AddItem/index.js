import React, { Component } from 'react';
import './AddItem.css'

class AddItem extends Component {
    state = {
        name: ""
    }

    inputChangedHandler = (event) => {
        this.setState({ name: event.target.value })
    }

    render() {
        return (
            <div className="add-item">
                <input type="text" placeholder="Buy groceries.." onChange={this.inputChangedHandler} value={this.state.name} />
                <button className="btn-item" onClick={() => this.props.itemAdded(this.state.name)}>Add Task</button>
            </div>
        );
    }
}

export default AddItem;