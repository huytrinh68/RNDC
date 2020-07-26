import React from 'react'

import { View, Text, FlatList } from 'react-native'
import { Data } from '@helper'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Complete = ({ navigation }) => {
    let { TODOS } = Data

    const handleChooseItem = item => {
        let params = item
        return navigation.navigate('Detail', params)
    }

    const renderItem = item => {
        return (
            <TouchableOpacity
                onPress={() => handleChooseItem(item)}
            >
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    backgroundColor: item.status === 'Done' ? 'green' : 'blue',
                    padding: 10,
                    borderRadius: 10
                }}>
                    <Text style={{ fontSize: 18, color: '#FFFFFF', paddingBottom: 5 }}>{item.id}. {item.status}</Text>
                    <Text style={{ fontSize: 16, color: '#FFFFFF' }}>{item.body}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                data={TODOS}
                renderItem={({ item }) => {
                    if (item.status === 'Done') return renderItem(item)
                    return null
                }}
                ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingLeft: 5, paddingRight: 5, marginTop: 20, paddingBottom: 50 }}
            />
        </View>
    )
}
export default Complete