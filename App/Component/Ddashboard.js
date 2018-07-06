import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image

} from 'react-native';
// import Map from './Map';
import Map from '../Component/Map';


export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}><Map /></View>

      //   <ImageBackground source={require('./Dback.png')} style={styles.imgbac}>

       
      //  <View style={styles.fields}>
      //     <Text style={styles.Tit}> Dashboard </Text>


      //     <TextInput placeholder="Your Location" />
      //     <TextInput placeholder="Your Destination" />
      //     <TextInput placeholder="Select Timing" />
      //     <TextInput placeholder="Select Date" />


      //     <TouchableOpacity onPress={this._onPressButton}>
      //       <Image
      //         style={styles.button}
      //         source={require('./Sub.png')}
      //       />
      //     </TouchableOpacity>

      //   </View> 

      // </ImageBackground>



    )
  }
}

const styles = StyleSheet.create({

  fields: {
    // alignItems: 'center',
    //justifyContent: 'center',
    width: '80%',
    height: '80%',
    backgroundColor: 'rgba(255,255,255,0.7)',


  },
  imgbac: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)'
  },

  Tit: {
    marginLeft: 80,
    color: '#76D7C4',
    marginBottom: 60,
    fontWeight: '600',
    fontSize: 20,
  },
  button: {
    height: 50,
    width: 150,
    marginLeft: 70,
    marginTop: 60
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});









