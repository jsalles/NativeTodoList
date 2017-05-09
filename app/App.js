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
  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      itemList: [
        { text: 'This is the first item', isChecked: false },
        { text: 'This is the second item', isChecked: true }
      ]
    };

    this.addItem = this.addItem.bind(this);
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
        />
        <Footer />
      </View>
    )
  }
}

export default App;
