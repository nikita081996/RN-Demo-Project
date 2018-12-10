import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  AsyncStorage,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { Input, CheckBox, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-ionicons';
import AlertDialog from '../../common/AlertComponent';

// Login page
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      remember: false,
      alert: false,
      alertTitle: 'Error',
      alertMsg: 'something went wrong !'
    };
  }

  componentDidMount() {
    // fetch mobile storage data and set to the state
    AsyncStorage.getItem('username')
      .then(value => {
        this.setState({ username: value });
      })
      .done();
    AsyncStorage.getItem('password')
      .then(value => {
        this.setState({ password: value });
      })
      .done();
    AsyncStorage.getItem('remember')
      .then(value => {
        console.log(value);
        this.setState({ remember: JSON.parse(value) });
      })
      .done();
  }

  // show Alert
  showAlert() {
    if (this.state.alert) {
      return (
        <AlertDialog
          alertTitle={this.state.alertTitle}
          alertMsg={this.state.alertMsg}
          onPressOk={() => this.setState({ alert: false })}
        />
      );
    }
    return <View />;
  }

  // check all the condition for login user, username and paasword will be 'mindfire'
  handleLogin() {
    Keyboard.dismiss();
    if (this.state.username === '' && this.state.password === '') {
      this.setState({
        alertTitle: 'Authentication Failed',
        alertMsg: 'Please Enter Username and Password'
      });
      this.setState({ alert: true });
    } else if (this.state.username === '') {
      this.setState({
        alertTitle: 'Authentication Failed',
        alertMsg: 'Please Enter Username'
      });
      this.setState({ alert: true });
    } else if (this.state.password === '') {
      this.setState({
        alertTitle: 'Authentication Failed',
        alertMsg: 'Please Enter Password'
      });
      this.setState({ alert: true });
    } else if (this.state.username !== 'mindfire' || this.state.password !== 'mindfire') {
      this.setState({
        alertTitle: 'Authentication Failed',
        alertMsg: 'Wrong Username or Password'
      });
      this.setState({ alert: true });
    } else {
      // navigate to the home page
      Actions.firstPage();
      if (this.state.remember) {
        AsyncStorage.setItem('username', this.state.username);
        AsyncStorage.setItem('password', this.state.password);
        AsyncStorage.setItem('remember', JSON.stringify(this.state.remember));
        console.log(`${this.state.remember}`);
      } else {
        this.removeItemValue('username');
        this.removeItemValue('password');
        this.removeItemValue('remember');
        //ToastAndroid.show(`${this.state.remember}`, ToastAndroid.LONG);
        this.setState({ username: '', password: '' });
      }
    }
  }

  // delete data from mobile storage
  async removeItemValue(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  }

  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Input
            placeholder="Username"
            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
            onChangeText={username => this.setState({ username })}
            value={this.state.username}
            containerStyle={styles.formInput}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            leftIcon={{ type: 'font-awesome', name: 'key' }}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            containerStyle={styles.formInput}
          />
          <CheckBox
            title="Remember Me"
            center
            checked={this.state.remember}
            onPress={() => this.setState({ remember: !this.state.remember })}
            containerStyle={styles.formCheckbox}
          />
          <View style={styles.formButton}>
            <Button
              onPress={() => this.handleLogin()}
              title="Login"
              icon={<Icon name="log-in" size={24} color="white" />}
              buttonStyle={{
                backgroundColor: '#512DA8'
              }}
            />
          </View>
          {this.showAlert()}
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

export default LoginComponent;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20
  },
  image: {
    margin: 10,
    width: 80,
    height: 60
  },
  formInput: {
    margin: 20
  },
  formCheckbox: {
    margin: 20,
    backgroundColor: null
  },
  formButton: {
    margin: 60,
    marginLeft: 60,
    marginRight: 60
  }
});
