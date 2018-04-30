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
       <ItemList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onAddedItem: (item) => dispatch({type: actionTypes.ADD_ITEM, item: item}),
  }
};

export default connect(null, mapDispatchToProps)(App);
