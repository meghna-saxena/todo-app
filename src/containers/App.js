import React, { Component } from 'react';
import AddItem from '../components/AddItem';
import ItemList from '../components/ItemList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <AddItem />
       <ItemList />
      </div>
    );
  }
}

export default App;
