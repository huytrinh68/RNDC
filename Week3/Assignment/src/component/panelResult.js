import React from 'react'
import { View, Text } from 'react-native'

const panelResult = ({ choose, computer }) => {
    const handleResult = () => {
        if (!computer) return "Scissors, Rock and Paper"
        if (computer === choose) {
            return "Tied!"
        }
        else if (choose === 1 && computer === 2 || choose === 2 && computer === 3 || choose === 3 && computer === 1) {
            return "Defeat!"
        }
        else {
            return "Victory!"
        }
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 26, marginTop: 20 }}>{handleResult()}</Text>
        </View>
    )
}
export default panelResult