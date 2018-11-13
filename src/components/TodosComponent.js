import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import Icon from 'react-native-ionicons';
import { fetchTodo } from '../redux/Action/ActionCreators';
import { Loading } from './LoadingComponent';

class TodosComponent extends Component {
  componentWillMount() {
    this.props.fetchTodo();
  }
  maybeRenderUploadingOverlay = () => {
    if (this.props.isLoading) {
      return (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ActivityIndicator color="#000" animating size="large" />
        </View>
      );
    }
  };

  render() {
    const RenderData = data => {
      if (data != null) {
        if (this.props.isLoading) {
          return <Loading />;
        }
        return (
          <FlatList
            data={data}
            renderItem={renderUserCard}
            keyExtractor={item => item.id.toString()}
          />
        );
      }
    };

    const renderUserCard = ({ item, index }) => (
      <View>
        <Card
          key={item.id}
          containerStyle={styles.cardWithIcon}

          // image={{ uri: item.restaurant.featured_image }}
        >
          <View style={styles.cardElementStyle}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
            {/* <Text style={{ fontSize: 18 }}>{item.body}</Text> */}
          </View>
        </Card>
      </View>
    );
    // console.log(this.props.item.name);
    return <View style={styles.mainContainer}>{RenderData(this.props.todo)}</View>;
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
  cardWithIcon: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 8,
    elevation: 5
  },
  cardElementStyle: {
    flexDirection: 'column'
  }
};

const mapStateToProps = state => {
  const { isLoading, errMess, todo } = state.todos;
  console.log(state.todos.todo);
  return { isLoading, errMess, todo };
};

// connect to the actioncreators
export default connect(
  mapStateToProps,
  { fetchTodo }
)(TodosComponent);
