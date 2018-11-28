import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import ImagePicker from "react-native-image-picker";
 
export default class Profile extends Component {
  state = {
    pickedImage: null
  };
 
  pickImageHandler = () => {
    ImagePicker.launchImageLibrary(
      { title: "Pick an Image", maxWidth: 800, maxHeight: 600 },
      res => {
        if (res.didCancel) {
          console.log("User cancelled!");
        } else if (res.error) {
          console.log("Error", res.error);
        } else {
          this.setState({
            pickedImage: { uri: res.uri }
          });
        }
      }
    );
  };
 
  resetHandler = () => {
    this.reset();
  };
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <Image style={styles.avatar} source={this.state.pickedImage} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.pickImageHandler}
            >
              <Text style={styles.buttonText}>Set Image</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Opcion 2</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#36485f",
    height: 200
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600"
  },
  body: {
    marginTop: 40
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#16a085",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center"
  },
  buttonText: {
    color: "#FFFF"
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#16a085"
  }
});