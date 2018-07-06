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
  ScrollView
} from 'react-native';
import * as firebase from 'firebase';
import firebaseApp from '../Config/firebase';


export default class RegForm extends Component {
  static navigationOptions = {
    title: 'Signup',
  };
  constructor() {
    super();
    this.state = {
     // email: '',
     VehCom:'',
     VechName:'',
     RegNo:'',
     DriLice:'',
     Colr:'',
     NoSeats:'',
    }

    this.VechHandler = this.VechHandler.bind(this);
  }

  VechHandler() {
    console.log("vechiles lkjadsfjklljds")
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    console.log("user.uid", user.uid)
    firebase.database().ref(`Vehical/${user.uid}`).set({
      VehicleCompany:this.state.VehCom,
      VechicleName:this.state.VechName,
      VechicleReg:this.state.RegNo,
      VechicleLicence:this.state.DriLice,
      vechicleColor:this.state.Colr,
      vechicleSeats:this.state.NoSeats 
     // Add: "jlkasdjfljds"
  
    }).then(() => {
      console.log(".then *****", this.porps)
      this.props.navigation.navigate('Drawer')
    }).catch( (error) => {
      // Handle Errors here.
      console.log("error in signup", error)
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  } else {
    // No user is signed in.
  }
});

 



// console.log("pass", pass);
// console.log("email", email); 
}

  render() {
    console.log(this.state)
    return <ScrollView contentContainerStyle={style.RegForm}>
      <Text style={style.header}>Vechicle Information</Text>
      
      <TextInput style={style.TextInput} placeholder="Vehicle Company" underlineColorAndroid={'transparent'} 
      value={this.state.VehCom}
        onChangeText={(input) => {
          this.setState({
            VehCom: input
          })
        }}
            />

      <TextInput style={style.TextInput} placeholder="Vehicle Name" value={this.state.VechName}
        onChangeText={(input) => this.setState({
          VechName:input
        })} underlineColorAndroid={'transparent'} />

      <TextInput style={style.TextInput} placeholder="Registration No" value={this.state.RegNo}
        onChangeText={(input) => this.setState({
          RegNo:input
        })} 
      
      underlineColorAndroid={'transparent'} />

      <TextInput style={style.TextInput} placeholder="Driver Licence" value={this.state.DriLice}
        onChangeText={(input) => this.setState({
          DriLice:input
        })}  underlineColorAndroid={'transparent'} />

      <TextInput style={style.TextInput} placeholder="Color" value={this.state.Colr}
        onChangeText={(input) => this.setState({
          Colr:input
        })}  underlineColorAndroid={'transparent'} />
      <TextInput style={style.TextInput} placeholder="No Of Seats" value={this.state.NoSeats}
        onChangeText={(input) => this.setState({
          NoSeats:input
        })} underlineColorAndroid={'transparent'} />

      <TouchableOpacity onPress={this.VechHandler}  style={style.button}>

        <Text style={style.btntxt}>Sign Up</Text>

      </TouchableOpacity>

    </ScrollView>
  }
}



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
    marginTop: 20

  },

  TextInput: {
    // alignself: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#000000',
    borderBottomColor: '#696969',
    borderBottomWidth: 1,

  },

  button: {
    // alignself: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0084c9',
    marginTop: 10,
  }



});

