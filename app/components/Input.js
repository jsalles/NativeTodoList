import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 15
  }
})

export default class Input extends Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired
  }
  static defaultProps = {
    placeholder: 'Inserir novo item!'
  }
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeText(text) {
    this.setState(function() {
      return {
        text: text
      };
    });
  }
  onSubmit() {
    const {addItem} = this.props;
    const {text} = this.state;

    if (!text) return;

    addItem(text);
    this.setState(function() {
      return {
        text: ''
      };
    });
  }
  render() {
    const { addItem, placeholder } = this.props;
    const { text } = this.state;

    return (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={text}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmit}
        blurOnSubmit={false}
      />
    );
  }
}
