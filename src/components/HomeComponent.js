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
    const string = item.name;
    const arr = string.split(' ');
    const letter1 = arr[0].charAt(0).toUpperCase();
    const letter2 = arr[1].charAt(0).toUpperCase();
    const letter = `${letter1}${letter2}`;
    return (
      <TouchableOpacity onPress={() => Actions.userDetailsComponent({ item })}>
        <Card
          key={item.id}
          containerStyle={styles.cardWithIcon}

          // image={{ uri: item.restaurant.featured_image }}
        >
          <View style={styles.iconWIthTextStyle}>
            <View style={styles.roundIcon}>
              <View style={styles.iconText}>
                <Text style={{ color: '#000000', fontWeight: 'bold' }}>{letter}</Text>
              </View>
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
              <Text style={{ fontSize: 18 }}>@{item.username}</Text>
            </View>
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
    marginTop: 50,
    backgroundColor: '#BEF1D4'
  },
  textStyles: {
    fontSize: 18,
    color: 'blue'
  },
  cardWithIcon: {
    flex: 1,
    backgroundColor: '#61F9A9',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 8,
    elevation: 5

    // alignItems: 'flex-start'
  },
  iconWIthTextStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  restaurantCard: {
    color: '#0CD765'
  },
  roundIcon: {
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#ffffff'
  },
  iconText: {
    justifyContent: 'space-around',
    alignItems: 'center'
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
