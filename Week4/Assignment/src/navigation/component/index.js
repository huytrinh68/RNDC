import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

const CustomTab = ({ ...props }) => {
    const iconSize = 23
    const fontSize = 12

    const handleIcon = (routeName, index) => {
        switch (routeName) {
            case "Active":
                return <Ionicons name="list-outline" size={iconSize} color={props?.state?.index === index ? '#005ED3' : '#c3c3c3'} />
            case "All":
                return <AntDesign name="pluscircleo" size={iconSize} color={props?.state?.index === index ? '#005ED3' : '#c3c3c3'} />
            case "Complete":
                return <Ionicons name="checkmark-done" size={iconSize} color={props?.state?.index === index ? '#005ED3' : '#c3c3c3'} />
            default:
                return null
        }
    }


    function handlePress(routeName, index) {
        props.navigation.jumpTo(routeName)
    }

    const Item = ({ routeName, index }) => (
        <View style={{ width: '33%', height: '100%' }}>
            <TouchableOpacity
                style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => handlePress(routeName.name, index)}
            >
                {handleIcon(routeName.name, index)}
                <Text style={{ fontSize: fontSize, fontWeight: '400', color: props?.state?.index === index ? '#005ED3' : '#c3c3c3', marginTop: 4 }}>{routeName.name}</Text>
            </TouchableOpacity>
        </View>
    )

    const renderListButton = (routes) => {
        let listIcon = []
        routes.forEach((item, index) => listIcon.push(<Item routeName={props.state.routes[index]} index={index} key={index} />))
        return listIcon
    }
    if (props?.state?.routes[props?.state?.index]?.state?.index > 0) return null
    return (
        <View style={{ width: '100%', height: 70, backgroundColor: '#FFFFFF', flexDirection: 'row' }}>
            {props?.state?.routes && renderListButton(props.state.routes)}
        </View>
    )
}

export default CustomTab;