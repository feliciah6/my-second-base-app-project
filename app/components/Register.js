import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Image,
  KeyboardAvoidingView,
  AsyncStorage,
  Picker
} from "react-native";

import { StackNavigator } from "react-navigation";

export default class Register extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      email: "",
      name: "",
      phone: "",
      service: "",
      password: "",
      password_confirmation: ""
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
    },
    headerTintColor: '#fff',
  };
  // onRegisterPress = () => {
  //   const { email, password } = this.state;

  //   this.setState({
  //     loading: true
  //   });

  //   fetch("http://localhost:8000/register/user", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       email: email,
  //       password: password
  //     })
  //   })
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       // If server response message same as Data Matched
  //       if (responseJson.statusCode === 200) {

  //         this.setState({
  //           loading: false,
  //           email: "false",
  //           password: "password"
  //         });
  //         //Then open Profile activity and send user email to profile activity.
  //         this.props.navigation.navigate("HomeScreen");
  //       } else {
  //         Alert.alert(responseJson.message);
  //       }
  //     })
  //     .catch(error => {
  //       this.setState({ error, loading: false });
  //       console.error(error);
  //     });
   
  async onRegisterPress() {
    const { email, password, name, service, phone } = this.state;
    console.log(email);
    console.log(name);
    console.log(phone);
    console.log(service);
    console.log(password);
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("name", name);
    await AsyncStorage.setItem("phone", phone);
    await AsyncStorage.setItem("service", service);
    await AsyncStorage.setItem("password", password);
    this.props.navigation.navigate("HomeScreen"); 
  }
  render() {
    return (
      <ScrollView style={{backgroundColor:"#36485f"}}>
      <View behavior="padding" style={styles.container}>
        
        <KeyboardAvoidingView>
          <TextInput
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            style={styles.input}
            placeholder="User name"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={() => this.emailInput.focus()}
          />

          <TextInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={styles.input}
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            ref={input => (this.emailInput = input)}
            onSubmitEditing={() => this.phoneInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
          />

          <TextInput
            value={this.state.phone}
            keyboardType = 'numeric'
            onChangeText={phone => this.setState({ phone })}
            ref={input => (this.phoneInput = input)}
            value={this.state.phone}
            maxLength={10}
            style={styles.input}
            placeholder="Phone number"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={() => this.serviceInput.focus()}
          />

          <Picker
            selectedValue={this.state.language}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Picker.Item label="service" value="service" />
            <Picker.Item label="customer" value="Customer" />
            <Picker.Item label="salonist" value="salonist" />
            
          </Picker>

          

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

          <TextInput
            value={this.state.password_confirmation}
            onChangeText={password_confirmation => this.setState({ password_confirmation })}
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="go"
            secureTextEntry
            ref={input => (this.passwordInput = input)}
          />
        </KeyboardAvoidingView>

        <TouchableHighlight
          onPress={this.onRegisterPress.bind(this)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>REGISTER </Text>
        </TouchableHighlight>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36485f",
    padding: 20,
    paddingTop: 30
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
   input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 10
  },
  button: {
    height: 50,
    backgroundColor: "#C7367E",
    borderRadius:50,
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 10
  },
  picker:{
    height: 40,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 10,
    
  },
  buttonText: {
    flex: 1,
    width: '100%',
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  subtext: {
    color: "#ffffff",
    width:'100%',
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20,
    opacity: 0.8
  }
});

AppRegistry.registerComponent("Register", () => Register);
