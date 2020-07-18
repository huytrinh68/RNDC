import React from 'react'
import { View, Text, Image } from 'react-native'
import { Identify } from '@common'

const TouramentTable = ({ choose, computer }) => {

    const oneLine = () => {
        return (
            <View
                style={{
                    width: 3,
                    height: 100,
                    backgroundColor: '#e3e3e3'
                }}
            />
        )
    }

    const linePagina = () => {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                {oneLine()}
                <View
                    style={{
                        width: 70,
                        height: 70,
                        borderRadius: 35,
                        borderWidth: 3,
                        borderColor: '#e3e3e3'
                    }}
                />
                {oneLine()}
            </View>
        )
    }

    const imageChoose = (source, name, type) => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={source}
                    style={{ width: 100, height: 100 }}
                />
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{Identify.switchName(name)}</Text>
            </View>
        )
    }
    return (
        <View style={{
            width: '98%',
            height: 300,
            borderRadius: 100,
            borderColor: '#c3c3c3',
            borderWidth: 3,
            marginTop: 50,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            paddingRight: 20
        }}>
            {imageChoose(Identify.switchTypeAction(choose), choose, 1)}
            {linePagina()}
            {imageChoose(Identify.switchTypeAction(computer), computer, 2)}
        </View>
    )
}
export default TouramentTable