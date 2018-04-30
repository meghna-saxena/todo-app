import React, { Component } from 'react';
import './AddItem.css'

class AddItem extends Component {
    state = {
        item: ""
    }

    inputChangedHandler = (event) => {
        this.setState({ item: event.target.value })
    }

    render() {
        return (
            <div className="add-item">
                <input type="text" placeholder="Buy groceries.." onChange={this.inputChangedHandler} value={this.state.item} />
                <button className="btn-item">Add Task</button>
                {this.state.item}
            </div>
        );
    }
}

export default AddItem;