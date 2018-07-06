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
  Image
} from 'react-native';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


export default class RChoose extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    }
  }
  static navigationOptions = {
    title: 'Signup',
  };


  render() {
    const radio_props = [ 
      { label: 'Car', value: 0  },
      { label: 'Bike', value: 1 }
    ];
    return <ScrollView contentContainerStyle={style.RChoose}>

<View>

<Image source={require('./sl.png')} style={style.logo} />

      </View>

      <Text style={style.txt}>Choose Your Vehicle</Text>

      <View>
        <RadioForm style={style.radiobtn}
          radio_props={radio_props}
          initial={0}
         // formHorizontal={true}
          onPress={(value) => { this.setState({ value: value }) }}
        />
      </View>

      <View>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('RPerInfo')} style={style.dp}>
      <Image source={require('./arr.png')} style={style.arrow} />
      </TouchableOpacity>
      </View>


    </ScrollView>
  }
}



const style = StyleSheet.create({
  RChoose: {
    flex: 1,
    backgroundColor: '#fffb00',
  },
 radiobtn:{
  marginTop: 60,
  justifyContent: 'center',
 },

 logo: {
  height:270,
  width:270,
justifyContent: 'center',
  marginTop:60,
  alignItems: 'center',
  marginLeft: 60
},

txt:{
  justifyContent: 'center',
  marginLeft:120,
  marginTop:-20
  
},

arrow:{
  marginTop: 60,
  marginLeft:310,
},


});

