import React from 'react'

import { View, Text, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

const Detail = ({ navigation, route }) => {
    let data = route?.params
    console.log(data)
    const Header = () => {
        return (
            <View style={{ width: '100%', height: 50, backgroundColor: '#FFFFFF', flexDirection: 'row' }}>
                <View style={{ width: '15%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Entypo name={'chevron-thin-left'} size={26} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '70%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>{route.name}</Text>
                </View>
                <View style={{ width: '15%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                </View>
            </View>
        )
    }
    const renderRow = (label, value) => {
        return (
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center', paddingTop: 5, paddingBottom: 5, borderColor: 'gray', borderWidth: 1 }}>
                    <Text style={{ fontWeight: '600' }}>{label}</Text>
                </View>
                <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, borderColor: 'gray', borderWidth: 1 }}>
                    <Text style={{ color: label === 'Status' ? data.status === 'Active' ? 'red' : 'green' : 'black' }}>{value}</Text>
                </View>
            </View>
        )
    }
    const Content = () => {
        return (
            <View style={{ width: '100%', padding: 20 }}>
                {renderRow('Seq', data.id)}
                {renderRow('Status', data.status)}
                {renderRow('Content', data.body)}
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <Content />
        </View>
    )
}
export default Detail