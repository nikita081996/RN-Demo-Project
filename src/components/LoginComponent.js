import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Keyboard,
  AsyncStorage,
  ToastAndroid,
  KeyboardAvoidingView
} from 'react-native';
import { Input, CheckBox, Button, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
// import { SecureStorage } from "nativescript-secure-storage";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      remember: false
    };
  }

  componentDidMount() {
    // var secureStorage = new SecureStorage();

    // var username = secureStorage.getSync({
    //   key: "username"
    // });
    // var value = secureStorage.getSync({
    //   key: "password"
    // }); password
    // this.setState({ username, password });

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
    // console.log(this.state.remember + '');
  }

  handleLogin() {
    //var secureStorage = new SecureStorage();
    Keyboard.dismiss();
    if (this.state.username === '' && this.state.password === '') {
      Alert.alert(
        'Authentication Failed',
        'Please Enter Username and Password',
        [
          {
            text: 'OK'
          }
        ],
        {
          cancelable: false
        }
      );
    } else if (this.state.username === '') {
      Alert.alert(
        'Authentication Failed',
        'Please Enter Username',
        [
          {
            text: 'OK'
          }
        ],
        {
          cancelable: false
        }
      );
    } else if (this.state.password === '') {
      Alert.alert(
        'Authentication Failed',
        'Please Enter Password',
        [
          {
            text: 'OK'
          }
        ],
        {
          cancelable: false
        }
      );
    } else if (this.state.username !== 'mindfire' || this.state.password !== 'mindfire') {
      Alert.alert(
        'Authentication Failed',
        'Wrong Username or Password',
        [
          {
            text: 'OK'
          }
        ],
        {
          cancelable: false
        }
      );
    } else {
      Actions.firstPage();
      if (this.state.remember) {
        AsyncStorage.setItem('username', this.state.username);
        AsyncStorage.setItem('password', this.state.password);
        AsyncStorage.setItem('remember', JSON.stringify(this.state.remember));
        console.log(`${this.state.remember}`);

        //console.log(this.state.remember);
        // const success = secureStorage.setSync({
        //   key: "username",
        //   value: this.state.username
        // },
        //   {
        //     key: "password",
        //     value: this.state.password
        //   });
      } else {
        // var success = secureStorage.removeSync({
        //   key: "username"
        // });
        // var success = secureStorage.removeSync({
        //   key: "password"
        // });
        this.removeItemValue('username');
        this.removeItemValue('password');
        this.removeItemValue('remember');
        ToastAndroid.show(`${this.state.remember}`, ToastAndroid.LONG);
      }
      this.setState({ username: '', password: '' });
    }
  }

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
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={this.state.behavior}>
          <Input
            placeholder="Username"
            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
            onChangeText={username => this.setState({ username })}
            value={this.state.username}
            containerStyle={styles.formInput}
          />
          <Input
            placeholder="Password"
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
              icon={<Icon name="sign-in" type="font-awesome" size={24} color="white" />}
              buttonStyle={{
                backgroundColor: '#512DA8'
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 60
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
    margin: 60
  }
});

export default LoginComponent;
