import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginComponent from './src/modules/login/LoginComponent';
import UserComponent from './src/modules/user/UserComponent';
import UserDetailsComponent from './src/modules/user/UserDetailsComponent';
import CommentsComponent from './src/modules/comments/CommentsComponent';
import TodosComponent from './src/modules/todo/TodosComponent';
import PhotosComponent from './src/modules/photos/PhotosComponent';

const RouterComponent = () => (
  <Router
    navigationBarStyle={styles.navBar}
    titleStyle={styles.navTitle}
    barButtonIconStyle={{ tintColor: 'white' }}
  >
    <Scene key="root">
      <Scene key="auth">
        <Scene key="loginComponent" component={LoginComponent} title="Login" />
      </Scene>
      <Scene key="firstPage">
        <Scene key="homeComponent" component={UserComponent} title="Home" initial />
        <Scene key="userDetailsComponent" component={UserDetailsComponent} title="User Details" />
        <Scene key="commentsComponent" component={CommentsComponent} title="Comments" />
        <Scene key="todosComponent" component={TodosComponent} title="Todos" />
        <Scene key="photosComponent" component={PhotosComponent} title="Photos" />
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
