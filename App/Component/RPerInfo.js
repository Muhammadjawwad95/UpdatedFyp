/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import * as firebase from 'firebase';
import firebaseApp from '../Config/firebase';

export default class RPerInfo extends Component {
  static navigationOptions = {
    title: 'Signup',
  };
  constructor() {
    super();
    this.state = {
      email: '',
      fullName: '',
      password: '',
      ContactNo: '', 
      studentId: '',
      Designation: '',
      Organization: '',
      Address: '',

    }
    this.signupHandler = this.signupHandler.bind(this);
  }
  signupHandler() {
    const email = this.state.email;
    const password = this.state.password;
    console.log("email", email);

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("userSignup successfully", user.uid);
        // this.props.navigation.navigate("RegForm");
        firebase.database().ref(`Users/${user.uid}`).set({
          name: this.state.fullName,
          contact: this.state.ContactNo,
          stndId: this.state.studentId,
          Desig: this.state.Designation,
          Orgn: this.state.Organization,
          Add: this.state.Address,

        }).then(() => {
          console.log(".then *****", this.porps)
          this.props.navigation.navigate('RegForm')
        }).catch(function (error) {
          // Handle Errors here.
          console.log("error in signup", error)
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        }); 
      })
      

    // console.log("pass", pass);
    // console.log("email", email);
  }
  render() {
    console.log(this.state)
    return <ScrollView contentContainerStyle={style.RegForm}>
      <Text style={style.header}>Personal Information</Text>

      <TextInput style={style.TextInput} placeholder="Full Name" underlineColorAndroid={'transparent'}
       value={this.state.fullName}
        onChangeText={(input) => {
          this.setState({
            fullName: input
          })
        }}

      />

      <TextInput style={style.TextInput} placeholder="Email" value={this.state.email}
        onChangeText={(input) => {
          this.setState({
            email: input
          })
          // console.log("abc from text input", abc)
        }} underlineColorAndroid={'transparent'} />

      <TextInput style={style.TextInput} placeholder="Contact no" underlineColorAndroid={'transparent'} value={this.state.ContactNo}
        onChangeText={(input) => {
          this.setState({
            ContactNo: input
          })
        }}  />

      <TextInput style={style.TextInput} placeholder="Student id" underlineColorAndroid={'transparent'} value={this.state.studentId}
        onChangeText={(input) => {
          this.setState({
            studentId: input
          })
        }}  />

      <TextInput style={style.TextInput} placeholder="Designation" underlineColorAndroid={'transparent'} value={this.state.Designation}
        onChangeText={(input) => {
          this.setState({
            Designation: input
          })
        }}  />

      <TextInput style={style.TextInput} placeholder="Organization" underlineColorAndroid={'transparent'} value={this.state.Organization}
        onChangeText={(input) => {
          this.setState({
            Organization: input
          })
        }}  />

      <TextInput style={style.TextInput} placeholder="Address" underlineColorAndroid={'transparent'} value={this.state.Address}
        onChangeText={(input) => {
          this.setState({
            Address: input
          })
        }} />

      <TextInput style={style.TextInput} placeholder="Password" secureTextEntry={true} value={this.state.password}
        onChangeText={(input) => {
          this.setState({
            password: input
          })
        }
        }
        underlineColorAndroid={'transparent'} />

      <View>
        <TouchableOpacity onPress={this.signupHandler}  style={style.dp}>
          <Image source={require('./arr.png')} style={style.arrow} />
        </TouchableOpacity>
      </View>

    </ScrollView>
  }
}

//onPress={(this.signupHandler) => this.props.navigation.navigate('RegForm')}

//onPress={this.signupHandler}

const style = StyleSheet.create({
  RegForm: {
    // alignself: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fffb00',
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 60,
  },

  header: {
    fontSize: 24,
    color: '#696969',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#696969',
    borderBottomWidth: 1,
    marginTop:20,

  },

  TextInput: {
    // alignself: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#000000',
    borderBottomColor: '#696969',
    borderBottomWidth: 1,

  },


  arrow: {
    marginLeft: 220,
    marginTop: 40,
  }

});

