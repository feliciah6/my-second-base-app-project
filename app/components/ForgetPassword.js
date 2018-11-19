import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      service:"",
      password: "",
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#36485f",
      elevation: null,
    },
    headerTitleStyle: {
      color: '#fff',
    },
    headerTitleStyle: {
      textAlign:'left', 
      alignSelf:'center',
      flex:1
    },
    headerTintColor: '#fff',
  };
async onRegisterPress() {
  console.log(service);
  await AsyncStorage.setItem("service", service);
}

  onForgetPress() {
    this.props.navigation.navigate("HomeScreen");
      
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          placeholderTextColor="rgba(255,255,255,0.7)"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
            value={this.state.service}
            onChangeText={service => this.setState({ service })}
            ref={input => (this.serviceInput = input)}
            style={styles.input}
            placeholder="Service"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
          />

          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="rgba(255,255,255,0.7)"
            ref={input => (this.passwordCInput = input)}
            onSubmitEditing={() => this.passwordInput.focus()}
            returnKeyType="next"
            secureTextEntry
          />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onForgetPress.bind(this)}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: "flex-start",
    backgroundColor: "#36485f",
    padding: 20,
    paddingTop: 100
  },
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 10
  },
  buttonContainer: {
    height: 50,
    backgroundColor: "#C7367E",
    borderRadius:50,
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 10
  },

  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
});
