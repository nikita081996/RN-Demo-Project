import React, { Component } from 'react';
import { Text, View } from 'react-native';

class UserDetailsComponent extends Component {
  render() {
    console.log(this.props.item.name);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.textViewStyle}>
          <Text style={styles.textHeaderStyles}>User Name: </Text>
          <Text style={styles.textStyles}>{this.props.item.username}</Text>
        </View>
        <View style={styles.textViewStyle}>
          <Text style={styles.textHeaderStyles}>Email: </Text>
          <Text style={styles.textStyles}>{this.props.item.email}</Text>
        </View>
        <View style={styles.textViewStyle}>
          <Text style={styles.textHeaderStyles}>Phone: </Text>
          <Text style={styles.textStyles}>{this.props.item.phone}</Text>
        </View>
        <View style={styles.textViewStyle}>
          <Text style={styles.textHeaderStyles}>Website: </Text>
          <Text style={styles.textStyles}>{this.props.item.website}</Text>
        </View>
        <View style={styles.textViewStyle}>
          <Text style={styles.textHeaderStyles}>Company Name: </Text>
          <Text style={styles.textStyles}>{this.props.item.company.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  mainContainer: {
    paddingTop: 60
  },
  textViewStyle: {
    flexDirection: 'row'
  },
  textHeaderStyles: {
    marginLeft: 10,
    fontSize: 24,
    color: 'blue',
    justifyContent: 'flex-start',
    flex: 1
  },
  textStyles: {
    fontSize: 20,
    color: 'black',
    justifyContent: 'flex-start',
    flex: 1
  }
};

export default UserDetailsComponent;
