import MapView from 'react-native-maps';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    // height: Dimensions.get('window').width,
    // width: Dimensions.get('window').height,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class extends React.Component {
  render() {
    const { region } = this.props;
    console.log(region);

    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 24.9200034,
            longitude: 67.1191429,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
    );
  }
}