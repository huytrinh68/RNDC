import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Zocial from 'react-native-vector-icons/Zocial'
import Fontisto from 'react-native-vector-icons/Fontisto'

const Icon = ({name = "", type = "", style = {}, onPress}) => {
    switch (type) {
        case "AntDesign":
            return <AntDesign type={type} name={name} style={style} size={23} onPress={onPress}/>
        case "Entypo":
            return <Entypo type={type} name={name} style={style} size={23}/>
        case "EvilIcons":
            return <EvilIcons type={type} name={name} style={style} size={23}/>
        case "Feather":
            return <Feather type={type} name={name} style={style} size={23}/>
        case "FontAwesome":
            return <FontAwesome type={type} name={name} style={style} size={23}/>
        case "Foundation":
            return <Foundation type={type} name={name} style={style} size={23}/>
        case "Ionicons":
            return <Ionicons type={type} name={name} style={style} size={23}/>
        case "MaterialIcons":
            return <MaterialIcons type={type} name={name} style={style} size={23}/>
        case "MaterialCommunityIcons":
            return <MaterialCommunityIcons type={type} name={name} style={style} size={23}/>
        case "SimpleLineIcons":
            return <SimpleLineIcons type={type} name={name} style={style} size={23}/>
        case "Octicons":
            return <Octicons type={type} name={name} style={style} size={23}/>
        case "Zocial":
            return <Zocial type={type} name={name} style={style} size={23}/>
        case "Fontisto":
            return <Fontisto type={type} name={name} style={style} size={23}/>
        default:
            return <AntDesign type={type} name={name} style={style} size={23}/>
    }
}
export default Icon;
