/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import ImagePicker from 'react-native-image-picker';
import Map from './src/Map'

const App = () => {
  const [initRegion, setInitRegion] = useState({
    latitude: 21.027763,
    longitude: 105.834160,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  })
  const [image, setImage] = useState(null)

  const handleLongPress = obj => {
    let newCor = { ...initRegion }
    newCor['latitude'] = obj['latitude']
    newCor['longitude'] = obj['longitude']
    setInitRegion(newCor)
  }
  return <Map initRegion={initRegion} handleLongPress={(obj) => handleLongPress(obj)}/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default App