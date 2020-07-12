import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Icon } from '@base'

const Header = ({parent}) => {
    function handleBack() {
        parent.props.parent.setState({screenSelected:0})
    }

    function contentHeader(type, icon) {
        return (
            <View style={{ width: '50%', height: '100%', alignItems: icon === 'grid-outline' ? 'flex-end' : 'flex-start', justifyContent: 'center' }}>
                <TouchableOpacity
                    hitSlop={{ top: 20, left: 50, right: 50, bottom: 20 }}
                    onPress={() => handleBack()}
                >
                    <Icon type={type} name={icon} style={{fontSize:20, color:'#7881a4'}}/>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={{ flexDirection: 'row', height: 50, paddingLeft: 20, paddingRight: 20, backgroundColor:'transparent', zIndex:999999, position:'absolute', top:20, left:0, right:0 }}>
            {contentHeader('Ionicons', 'arrow-back-sharp')}
            {contentHeader('Ionicons', 'grid-outline')}
        </View>
    )
}
export default Header