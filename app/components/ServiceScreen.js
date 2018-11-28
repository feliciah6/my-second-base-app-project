import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
 
export default class ServicesScreen extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: true
    };
  }
 
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#36485f",
      elevation: null
    },
    headerTitleStyle: {
      color: "#fff",
      fontFamily: "Montserrat-Regular",
      fontSize: 25,
      textAlign: "center",
      alignSelf: "center",
      width: "100%",
      justifyContent: "center"
    },
    headerTintColor: "#fff"
  };
   
 
  componentDidMount() {
    this.makeRemoteRequest();
  }
 
  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({
      loading: true
    });
 
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };
 
  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };
 
  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };
 
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
          marginRight: "14%"
        }}
      />
    );
  };
 
  renderFooter = () => {
    if (!this.state.loading) return null;
 
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
 
  render() {
    return (
      <View behavior="padding" style={styles.container}>
 
        <FlatList
          data={this.state.data}
          numColumns={2}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "flex-start",
                marginRight: 2,
                marginLeft: 2,
                marginTop: 2,
                padding: 5
              }}
            >
              <Image
                source={{
                  uri:
                    "https://media.glamour.com/photos/5b0445a8f3eab061599ef3da/master/pass/hair-salo98n.jpg"
                }}
                style={styles.imageView}
              />
 
              <Text style={styles.textView}>Hair Treatment</Text>
              <Text style={styles.textView}>ksh 3,500</Text>
            </View>
          )}
          keyExtractor={item => item.email}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF"
  },
  imageView: {
    width: "100%",
    height: 200,
    margin: 7,
    padding: 10,
    borderRadius: 7
  },
  textView: {
    width: "100%",
    textAlignVertical: "center",
    padding: 5,
    color: "#000"
  },
  list: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
 
AppRegistry.registerComponent("ServicesScreen", () => ServicesScreen);