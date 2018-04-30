import React, { Component } from 'react';

class AddItem extends Component {
    state = {
        items: ""
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Buy groceries.." onChange={this.inputChangedHandler} value={this.state.items} />
                <button>Add Task</button>
            </div>
        );
    }
}

export default AddItem;