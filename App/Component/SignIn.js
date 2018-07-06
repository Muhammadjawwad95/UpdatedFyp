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
  Image,
  KeyboardAvoidingView,
  ScrollView,

} from 'react-native';
import * as firebase from 'firebase';





export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      // fullName: '',
      password: '',
      signinError: null,
      // ContactNo: '',
      // studentId: '',
      // Designation: '',
      // Organization: '',
      // Address: '',

    }
    this.signinHandler = this.signinHandler.bind(this);
  }
 static navigationOptions = {
   title: 'Signin',
  };
  signinHandler() {
    const email = this.state.email;
    const password = this.state.password;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log("user from signin", user)
      this.props.navigation.navigate('Drawer');      
      this.setState({
        signinError: null,
      })
    }).catch((err) => {
      console.log("err from signin", err)
      this.setState({
        signinError: err.message,
      })
    })
    // console.log("siginhandler", this.state  )
  }
  render() {
    return (
      <ScrollView>

        <KeyboardAvoidingView behavior="padding" enabled style={style.container} >

          <View style={style.logoContainer}>

            <Image source={require('./sl.png')} style={style.logo} />

          </View>

          <View style={style.formcontainer}>
       {this.state.signinError ?  <Text style={{color: 'red'}}>{this.state.signinError}</Text> : null}
            <TextInput
              placeholder="Email" placeholderTextColor="#696969" style={style.input} value={this.state.email}
              onChangeText={(input) => {
                this.setState({
                  email: input
                })
              }} />

            <TextInput
              placeholder="Password" style={style.input} placeholderTextColor="#696969" secureTextEntry={true}
              value={this.state.password}
              onChangeText={(input) => {
                this.setState({
                  password: input
                })
              }}
            />

          </View>

          <View style={style.sin}>
            <TouchableOpacity onPress={this.signinHandler} style={style.button}>

              <Text style={style.btntxt}>Sign In</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')} style={style.fp}>
              <Text>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

        </KeyboardAvoidingView>

      </ScrollView>
    )
  }
}



const style = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fffb00',
    height: 620
  },

  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#696969',
    borderBottomWidth: 1,
  },

  logo: {
    height: 250,
    width: 250,
    justifyContent: 'center',
    marginTop: 60,
    alignItems: 'center',
    marginLeft: 65,
  },

  logoContainer: {

  },

  input: {
    height: 40,
    backgroundColor: '#FEFAFA',
    marginTop: 20,
    color: 'black',
    paddingHorizontal: 10
  },

  formcontainer: {
    padding: 20,
    marginTop: -60
  },

  button: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0084c9',
    marginTop: 30,
    width: 200,
  },
  sin: {
    alignItems: 'center',
    justifyContent: 'center'

  },

  fp: {
    marginTop: 15

  }


});

