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
  Button,
  Image,
  label
} from 'react-native';





export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',

  
  };
  render() {
    return <View style={style.Home}>

<View style={style.msg}>
<TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')} style={style.btnSI}>
        <Text>Sign In</Text>
      </TouchableOpacity>
   
            </View> 
         
<View>

<Image source={require('./sl.png')} style={style.logo} />

      </View>

<View style={style.mHbtn}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('RChoose')} style={style.buttond}>
        <Text>Driver</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate('RegForm')} style={style.buttonp}>
        <Text>Passenger</Text>
      </TouchableOpacity>

</View>      

    </View>
  }
}



const style = StyleSheet.create({
 
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
   
  },

  TextInput: {
    // alignself: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,

  },

  buttond: {
 
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0084c9',
    marginTop:5,
    marginBottom:10,
    width:200,
    color:"#FFFFFF"
    
  },

  buttonp: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0084c9',
    marginTop:10,
    width:200, 
  },

 logo:{
  height:270,
  width:270,
justifyContent: 'center',
  marginTop:90,
  alignItems: 'center',
  marginLeft: 60
 },

 mHbtn:{
  // flex:3,
   alignItems:'center',
   marginTop:30
 },

 
sg:{
 width:240,
 height:40,
  marginLeft:195
},

Home:{
  backgroundColor: '#fffb00',
  borderBottomWidth: 1,
  marginTop:0,
  height:620

},

btnSI:{
  marginTop:20,
  marginLeft:300,
  width:null,
  height:null,
  fontSize:20
}



});;

