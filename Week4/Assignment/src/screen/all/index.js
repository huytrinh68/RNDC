import React, { useState, useEffect, useRef } from 'react'

import { View, Text, FlatList, TextInput, ActivityIndicator, Alert } from 'react-native'
import { Data, Storage } from '@helper'
import { TouchableOpacity } from 'react-native-gesture-handler'

const All = ({ navigation }) => {
    const input = useRef(null)
    const [data, setData] = useState()
    const [text, setText] = useState()
    const [showLoading, setShowLoading] = useState(false)

    useEffect(() => {
        Storage.getDataSaved().then(res => {
            console.log(res)
            setData(JSON.parse(res))
        })
    }, [])

    const handleSubmit = () => {
        if (!text) return null
        input.current.clear()
        let dataTemp = data
        let dataNew = {
            id: data.length + 1,
            status: 'Active',
            body: text
        }
        dataTemp.push(dataNew)
        setShowLoading(true)
        Storage.saveData(dataTemp).then(() => {
            setShowLoading(false)
            setData(dataTemp)
        })
    }

    const handleChooseItem = item => {
        let params = item
        return navigation.navigate('Detail', params)
    }

    const handleLongPress = item => {
        Alert.alert(
            "Todo Application",
            "Delete it ?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        //Delete
                        let dataTemp = data
                        let indexItem = item.id - 1
                        dataTemp.splice(indexItem, 1)
                        setShowLoading(true)
                        Storage.saveData(dataTemp).then(() => {
                            setShowLoading(false)
                            setData(dataTemp)
                        })

                    }
                }
            ],
            { cancelable: false }
        );
    }

    const renderItem = item => {
        return (
            <TouchableOpacity
                onPress={() => handleChooseItem(item)}
                onLongPress={() => handleLongPress(item)}
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
    const BottomList = () => {
        return (
            <View style={{ width: '100%' }}>
                <TextInput
                    style={{ width: '100%', height: 60, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingLeft: 20 }}
                    placeholder={'Take a note... '}
                    onChangeText={text => setText(text)}
                    clearButtonMode="always"
                    ref={input}
                />
                <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 10, backgroundColor: 'red', marginTop: 5, borderRadius: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {showLoading && <View style={{ position: 'absolute', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', zIndex: 9999999999 }}>
                <ActivityIndicator
                    size="large" color="red"
                />
            </View>}
            {data && <FlatList
                data={data}
                renderItem={({ item }) => renderItem(item)}
                ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingLeft: 5, paddingRight: 5, marginTop: 20, paddingBottom: 50 }}
                ListFooterComponent={BottomList()}
                ListFooterComponentStyle={{ marginTop: 5, width: '100%' }}
            />}

        </View>
    )
}
export default All