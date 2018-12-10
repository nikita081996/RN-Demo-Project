import React, { Component } from 'react';
import { Alert, View } from 'react-native';

class AlertDialog extends Component {
  alert() {
    Alert.alert(
      this.props.alertTitle,
      this.props.alertMsg,
      [
        {
          text: 'OK',
          onPress: this.props.onPressOk
        }
      ],
      {
        cancelable: false
      }
    );
  }

  render() {
    return <View>{this.alert()}</View>;
  }
}

export default AlertDialog;
