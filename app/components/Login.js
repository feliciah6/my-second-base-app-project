import React, { Component } from "react";
import {
  AppRegistry,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  TextInput,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View,
  Modal,
  ActivityIndicator
} from "react-native";

import { StackNavigator } from "react-navigation";
import Loader from "./Loader";
import renderIf from "./util/renderIf";
//import Spinner from "react-native-loading-spinner-overlay";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      email: "",
      password: ""
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    headerTitleStyle: {
      textAlign: "left",
      alignSelf: "center",
      flex: 1
    },
    headerTintColor: "#fff"
  };

  onLoginPress = () => {
    const { email, password } = this.state;

    this.setState({
      loading: true
    });

    fetch("https://68c0ff0a.ngrok.io/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        // If server response message same as Data Matched
        if (responseJson.statusCode === 200) {

          this.setState({
            loading: false,
            email: "false",
            password: "password"
          });
          //Then open Profile activity and send user email to profile activity.
          this.props.navigation.navigate("HomeScreen");
        } else {
          Alert.alert(responseJson.message);
        }
      })
      .catch(error => {
        this.setState({ error, loading: false });
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
            <Loader loading={this.state.loading} />
            <Image style={styles.logo} source={require("./logs.png")} />
            <Text style={styles.subtext}>Hair Care</Text>
          </View>

          <KeyboardAvoidingView style={styles.keyboard}>
            

            

           
          </KeyboardAvoidingView>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => this.props.navigation.navigate("Register")}
            title="REGISTER"
          >
            REGISTER
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => this.props.navigation.navigate("ForgetPassword")}
            title="LOGIN"
          >
            LOGIN
          </Text>
        </TouchableOpacity> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 150
  },
  subtext: {
    color: "#C7367E",
    width: "100%",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20,
    opacity: 0.8
  },
  keyboard: {
    margin: 20,
    padding: 20,
    alignSelf: "stretch"  
  },
  buttonContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  button: {
    backgroundColor: "#C7367E",
    paddingVertical: 15,
    padding: 20,
    height: 60,
    marginBottom: 80,
    marginTop: 5,
    marginRight: 20,
    marginLeft: 20,
    borderRadius:50,
  },
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 10
  },
  window: {
    marginBottom: 15
  }
});

AppRegistry.registerComponent("Login", () => Login);
