import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  remove: {
    color: '#CD5C5C',
  },
})

export default class Footer extends Component {
  static propTypes = {
    onRemoveCompleted: PropTypes.func.isRequired
  }
  render() {
    const { onRemoveCompleted } = this.props;
    
    return (
      <TouchableOpacity 
        onPress={onRemoveCompleted}
        style={styles.footer}
      >
        <Text style={styles.remove}>Remove completed items</Text>
      </TouchableOpacity>
    )
  }
}
