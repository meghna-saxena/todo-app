import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddItem from '../components/AddItem';
import ItemList from '../components/ItemList';
import * as actionTypes from '../store/actions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddItem itemAdded={this.props.onAddedItem} />


        {this.props.items.map(item => ( //passing state
          <ItemList
            key={item.id}
            name={item.name}
            clicked={() => this.props.onRemovedItem(item.id)} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddedItem: (name) => dispatch({ type: actionTypes.ADD_ITEM, name: name }),
    onRemovedItem: (id) => dispatch({type: actionTypes.REMOVE_ITEM, itemId: id})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
