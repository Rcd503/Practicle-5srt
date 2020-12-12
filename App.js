

import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import Constants from 'expo-constants';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View,AsyncStorage  } from 'react-native';
import { render } from 'react-dom';
import FlatListApidata from './Components/FlatListApidata'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
        number:""
      };
    }
    handleEmail = text => {
      this.setState({ email: text });
    };
    handlePassword = text => {
      this.setState({ password: text });
    };
    handleNumber = text => {
      this.setState({ number: text });
    };

    storeData = async () =>{
      try {
        let obj = {  
          number: this.state.number,  
          email: this.state.email,   
          password: this.state.password,    
        }  
    await AsyncStorage.setItem('user',JSON.stringify(obj));
       



        console.log("save data");
      } catch (error) {
        console.log("error async store data")
      }
    };

    retrieveData= async ()=>{
      try {
        

        let user = await AsyncStorage.getItem('user');  
        let userdata = JSON.parse(user);  
        
        if (userdata !== null) {
          // We have data!!
          console.log(userdata.email);
          console.log(userdata.password);
          console.log(userdata.number);
        }
      } catch (error) {
        // Error retrieving data
        console.log("error async retrive data")
      }
    };
  
 render() {
  return(
    <View style={styles.container}>
    <Text style={{fontSize:25, color:'blue',alignItems:"center"}}>Practicle 5Srt</Text>

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor="black"
        autoCapitalize="none"
        onChangeText={this.handleEmail}
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor="black"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={this.handlePassword}
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Number"
        placeholderTextColor="black"
        autoCapitalize="none"
        secureTextEntry={false}
        onChangeText={this.handleNumber}
      />
      <TouchableOpacity onPress={this.storeData}
          style={styles.submitButton}
      >
      <Text style={styles.submitButtonText}> Submit save </Text>
      </TouchableOpacity >
      <TouchableOpacity onPress={this.retrieveData}
          style={styles.submitButton}
      >
      <Text style={styles.submitButtonText}> Submit receive</Text>
      </TouchableOpacity >
      
      <View style={{padding:10}}>
      <Text style={styles.textshow}>{this.state.email}</Text>
      <Text style={styles.textshow}>{this.state.password}</Text>
      <Text style={styles.textshow}>{this.state.number}</Text>
      </View>

     </View>


  );
    
 };

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
     alignItems: "stretch",
    backgroundColor: "#F5FCFF",
    marginTop: Constants.statusBarHeight,
  },
  input: {
    paddingStart:5,
    margin: 15,
    height: 40,
    borderColor: "black",
    borderWidth: 2
  },
  submitButton: {
    backgroundColor: "black",
    padding: 10,
    margin: 15,
    alignItems: "center",
    height: 40
  },
  submitButtonText: {
    alignItems:"center",
    fontSize:18,
    paddingBottom:2,
    color: "white"
  },
  textshow: {
    padding:3,
     margin: 15,
    borderWidth:2
  }
});
