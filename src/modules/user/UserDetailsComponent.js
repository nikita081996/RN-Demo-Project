import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-ionicons';
import { Actions } from 'react-native-router-flux';

class UserDetailsComponent extends Component {
  render() {
    console.log(this.props.item.name);
    return (
      <ScrollView style={styles.mainContainer}>
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
        <View style={styles.formButton}>
          <Button
            onPress={() => Actions.commentsComponent()}
            title="Comments"
            icon={<Icon name="chatboxes" size={24} color="white" />}
            buttonStyle={{
              backgroundColor: '#512DA8'
            }}
          />
        </View>
        <View style={styles.formButton}>
          <Button
            onPress={() => Actions.photosComponent()}
            title="Images"
            icon={<Icon name="images" size={24} color="white" />}
            buttonStyle={{
              backgroundColor: '#512DA8'
            }}
          />
        </View>
        <View style={styles.formButton}>
          <Button
            onPress={() => Actions.todosComponent()}
            title="Todos"
            buttonStyle={{
              backgroundColor: '#512DA8'
            }}
          />
        </View>
      </ScrollView>
    );
  }
}
export default UserDetailsComponent;

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
  },
  formButton: {
    marginTop: 60,
    marginLeft: 60,
    marginRight: 60
  }
};
