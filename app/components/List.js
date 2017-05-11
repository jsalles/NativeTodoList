import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'whitesmoke'
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  remove: {
    marginLeft: 10,
    marginBottom: 2,
    color: '#CD5C5C',
    fontSize: 26
  },
  completed: {
    backgroundColor: 'whitesmoke'
  },
})

export default class List extends Component {
  static propTypes = {
    itemList: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      isChecked: PropTypes.bool.isRequired
    })).isRequired,
    onItemCompleted: PropTypes.func.isRequired,
    onItemRemoved: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
    this.itemCompleted = this.itemCompleted.bind(this);
    this.itemRemoved = this.itemRemoved.bind(this);
  }
  itemCompleted(index) {
    const { onItemCompleted } = this.props;
    onItemCompleted(index);
  }
  itemRemoved(index) {
    const { onItemRemoved } = this.props;
    onItemRemoved(index);
  }
  renderRow(item, index) {
    return (
      <View key={index} style={[styles.item, item.isChecked ? styles.completed : null]}>
        <Text>{item.text}</Text>
        <View style={styles.rightSection}>
          <Checkbox
            onToggle={this.itemCompleted.bind(null, index)}
            isChecked={item.isChecked}
          />
          <TouchableOpacity
            onPress={this.itemRemoved.bind(null, index)}
          >
            <Text style={styles.remove}>&times;</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  render() {
    const { itemList } = this.props;
    return (
      <ScrollView>
        {itemList.map(this.renderRow)}
      </ScrollView>
    )
  }
}
