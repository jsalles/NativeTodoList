import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app/App';

class TodoList extends Component {
  render() {
    return (
      <App />
    )
  }
};


AppRegistry.registerComponent('TodoList', () => TodoList);
