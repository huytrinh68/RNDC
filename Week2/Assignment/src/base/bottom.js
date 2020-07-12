import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Icon } from '@base'

const Bottom = () => {
    function contentHeader(type, icon) {
        return (
            <View style={{ width: '30%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                    hitSlop={{ top: 20, left: 50, right: 50, bottom: 20 }}
                >
                    <Icon type={type} name={icon} style={{fontSize:24, color:'#7881a4'}}/>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={{ flexDirection: 'row', height: 40, paddingLeft: 20, paddingRight: 20, backgroundColor:'transparent', justifyContent:'center', alignItems:'center', position:'absolute', bottom:10, left:0, right:0 }}>
            {contentHeader('Entypo', 'swarm')}
            {contentHeader('Ionicons', 'add-circle-outline')}
            {contentHeader('Ionicons', 'person-outline')}
        </View>
    )
}
export default Bottom