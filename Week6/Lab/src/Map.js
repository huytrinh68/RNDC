import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
    Image,
    TouchableOpacity,
    Dimensions,
    Modal
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import ImagePicker from 'react-native-image-picker';
import CustomContent from './CustomContent'
const Map = ({ initRegion, handleLongPress }) => {
    const [image, setImage] = useState(null)
    const { width, height } = Dimensions.get('window')
    const [visible, setVisible] = useState(false)

    const handlePickImage = () => {
        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        /**
         * The first arg is the options object for customization (it can also be null or omitted for default options),
         * The second arg is the callback which sends object: response (more info in the API Reference)
         */
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                setImage(source)
            }
        });
    }

    const openModal = () => {
        setVisible(true)
    }

    const closeModal = () => {
        setVisible(false)
    }
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <Modal
                visible={visible}
                width={200}
                height={300}
                animationType="slide"
                transparent={true}
            >
                <View style={{ width: '100%', height: '100%', backgroundColor: '#FFFFFF' }}>
                    <Image
                        source={image}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode={'contain'}
                    />
                    <TouchableOpacity
                        onPress={() => closeModal()}
                        style={{ position: 'absolute', bottom: 0, width: '100%' }}
                    >
                        <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#003567' }}>
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Close</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
            <View style={{ position: 'absolute', top: 20, left: 10, width: '100%', height: 30, flexDirection: 'row', zIndex: 99999999 }}>
                <Text style={{ fontStyle: 'italic' }}>{`lat: ${initRegion['latitude']} `}</Text>
                <Text style={{ fontStyle: 'italic' }}>{`|| long: ${initRegion['longitude']}`}</Text>
            </View>
            <TouchableOpacity
                onPress={() => handlePickImage()}
                style={{ position: 'absolute', bottom: 10, right: 10, top: height - 70, zIndex: 9999999 }}>
                <View style={{ width: '100%', height: 60, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={require('../asset/add.png')}
                        style={{ width: 60, height: 60 }}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => openModal()}
                style={{ position: 'absolute', bottom: 10, right: 100, top: height - 70, zIndex: 9999999 }}>
                <View style={{ width: '100%', height: 60, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={require('../asset/full.png')}
                        style={{ width: 50, height: 50 }}
                    />
                </View>
            </TouchableOpacity>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.container}
                initialRegion={initRegion}
                onLongPress={(e) => handleLongPress(e.nativeEvent.coordinate)}
            >
                <Marker
                    coordinate={{
                        latitude: initRegion['latitude'],
                        longitude: initRegion['longitude'],
                    }}
                    pinColor={'black'}
                >
                    <Callout>
                        <View style={{ width: 100, height: 100, zIndex: 99999999, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={image}
                                style={{ width: 100, height: 100 }}
                            />
                        </View>
                    </Callout>
                </Marker>
            </MapView >
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Map