import React, { Component } from "react";
import {
  View,
  AppRegistry,
  Text,
  Alert,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
 
export default class ListScreen extends Component {
  constructor() {
    super();
 
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
    const url = `https://hair-care-db--feliciahmtoka.repl.co/saloon`;
    this.setState({
      loading: true
    });
 
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res : [...this.state.data, ...res],
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
 
  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        darkTheme
        round
        containerStyle={{
          borderTopWidth: 0,
          borderBottomWidth: 0
        }}
        inputStyle={{ backgroundColor: "white" }}
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
    const url = `https://media.glamour.com/photos/5b0445a8f3eab061599ef3da/master/pass/hair-salo98n.jpg`;
    return (
      <View behavior="padding" style={styles.container}>
        <List
          containerStyle={{
            flex: 1,
            borderTopWidth: 0,
            borderBottomWidth: 0
          }}
        >
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => this.props.navigation.navigate("ServicesScreen")}
              >
                <ListItem
                  roundAvatar
                  title={`${item.name} ${item.description}`}
                  subtitle={`${item.opening_time} - ${item.closing_time}`}
                  avatar={{ uri: url}}
                  containerStyle={{ borderBottomWidth: 0 }}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.email}
            ItemSeparatorComponent={this.renderSeparator}
            // ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={50}
          />
        </List>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36485f"
  }
});
 
AppRegistry.registerComponent("ListScreen", () => ListScreen);