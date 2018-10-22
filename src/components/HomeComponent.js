import React, { Component } from 'react';
import { Text, View, BackHandler, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { NavigationActions } from 'react-navigation';
import { fetchUser } from '../redux/Action/ActionCreators';
import { Loading } from './LoadingComponent';

class HomeComponent extends Component {
  // ...

  componentWillMount() {
    //console.log('componentwillmount');

    this.fetchUser();
    // this.props.navigation.dispatch(
    //   NavigationActions.reset({
    //     index: 0,
    //     actions: [NavigationActions.navigate({ routeName: 'HomeComponent' })]
    //   })
    // );
  }
  // componentDidMount() {
  //   BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  //   // var SecureStorage = require("nativescript-secure-storage").SecureStorage;
  // }

  // componentWillReceiveProps(nextProps) {
  //   //  console.log(nextProps.user);
  // }

  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }
  // onButtonPress = () => {
  //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  //   // then navigate
  //   //navigate('NewScreen');
  // };

  // handleBackButton = () => {
  //   //  const currentRouteName = this.context.router.getCurrentPathname();
  //   console.log(this.props);
  //   BackHandler.exitApp();
  // };

  fetchUser() {
    /**
     * call the ActionCreators fetchUser function
     * */
    this.props.fetchUser();
  }

  RenderUser(users) {
    if (users != null) {
      console.log('data');
      // console.log(comments);
      if (this.props.isLoading) {
        return <Loading />;
      }
      return (
        <FlatList
          data={users}
          renderItem={({ item }) => this.renderUserCard(item)}
          keyExtractor={item => item.id.toString()}
        />
      );
    }
  }

  renderUserCard(item) {
    //  console.log(item);
    return (
      <TouchableOpacity onPress={() => Actions.userDetailsComponent({ item })}>
        <Card
          overlayStyle={{ opacity: 0 }}
          key={item.id}
          style={styles.restaurantCard}

          // image={{ uri: item.restaurant.featured_image }}
        >
          <View>
            <Text style={{ fontSize: 20 }}>{item.name}</Text>
            <Text style={styles.textStyles}>
              {item.address.street}, {item.address.city}
            </Text>
          </View>
        </Card>
        {/* //   <Text>hrello</Text> */}
      </TouchableOpacity>
    );
  }

  render() {
    // this.props.user.map(user => console.log(user.name));
    return (
      <View style={styles.mainContainerStyles}>
        {/* <Text style={styles.textStyles}>Splash Form</Text> */}
        {this.RenderUser(this.props.user)}
      </View>
    );
  }
}

const styles = {
  mainContainerStyles: {
    marginTop: 50
  },
  textStyles: {
    fontSize: 18,
    color: 'blue'
  },
  restaurantCard: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 30
  }
};

/**
 * map state to props
 *
 */
const mapStateToProps = state => {
  const { isLoading, errMess, user } = state.user;
  console.log(state.user.user);
  return { isLoading, errMess, user };
};

// connect to the actioncreators
export default connect(
  mapStateToProps,
  { fetchUser }
)(HomeComponent);
