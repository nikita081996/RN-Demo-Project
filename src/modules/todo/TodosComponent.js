import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchTodo } from './TodoActionCreators';
import { Loading } from '../../common/LoadingComponent';

class TodosComponent extends Component {
  componentWillMount() {
    // fetch todo data
    this.props.fetchTodo();
  }

  render() {
    const RenderData = data => {
      if (data != null) {
        // while data fetching
        if (this.props.isLoading) {
          return <Loading />;
        }
        // after fetching data is done
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
        <Card key={item.id} containerStyle={styles.cardWithIcon}>
          <View style={styles.cardElementStyle}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
          </View>
        </Card>
      </View>
    );
    return <View style={styles.mainContainer}>{RenderData(this.props.todo)}</View>;
  }
}

// mapping state data to props
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
