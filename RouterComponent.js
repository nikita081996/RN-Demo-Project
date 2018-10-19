import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginComponent from './src/components/LoginComponent';
import HomeComponent from './src/components/HomeComponent';
import UserDetailsComponent from './src/components/UserDetailsComponent';

const RouterComponent = () => (
  <Router
    navigationBarStyle={styles.navBar}
    titleStyle={styles.navTitle}
    barButtonIconStyle={{ tintColor: 'whites' }}
  >
    <Scene key="root">
      <Scene key="auth">
        <Scene key="loginComponent" component={LoginComponent} title="Login" />
      </Scene>
      <Scene key="firstPage">
        <Scene key="homeComponent" component={HomeComponent} title="Home" initial />
        <Scene key="userDetailsComponent" component={UserDetailsComponent} title="User Details" />
      </Scene>
    </Scene>
  </Router>
);

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#512DA8',
    justifyContent: 'flex-start' // changing navbar color
  },
  navTitle: {
    color: 'white',
    justifyContent: 'flex-start' // changing navbar title color
  }
});

export default RouterComponent;
