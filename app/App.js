import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import Title from './components/Title';
import Input from './components/Input';
import List from './components/List';
import Footer from './components/Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemList: [ ]
    };

    this.addItem = this.addItem.bind(this);
    this.onItemCompleted = this.onItemCompleted.bind(this);
    this.onItemRemoved = this.onItemRemoved.bind(this);
    this.onRemoveCompleted = this.onRemoveCompleted.bind(this);
  }
  addItem(itemText) {
    var newItem = {
      text: itemText,
      isChecked: false
    };

    var newState = this.state;
    newState.itemList.push(newItem);

    this.setState(newState);
  }
  onItemCompleted(index) {
    const { itemList } = this.state;
    itemList[index].isChecked = !itemList[index].isChecked;

    this.setState(function() {
      return {
        itemList: itemList
      };
    });
  }
  onItemRemoved(index) {
    const { itemList } = this.state;

    this.setState(function() {
      return {
        itemList: itemList.filter((_, i) => i !== index)
      };
    });
  }
  onRemoveCompleted() {
    const { itemList } = this.state;

    this.setState(function() {
      return {
        itemList: itemList.filter((item) => item.isChecked !== true)
      };
    });
  }
  render() {
    var { itemList } = this.state;

    return (
      <View style={styles.container}>
        <Title>To-Do List</Title>
        <Input 
          addItem={this.addItem}
        />
        <List 
          itemList={itemList}
          onItemCompleted={this.onItemCompleted}
          onItemRemoved={this.onItemRemoved}
        />
        <Footer 
          onRemoveCompleted={this.onRemoveCompleted}
        />
      </View>
    )
  }
}

export default App;
