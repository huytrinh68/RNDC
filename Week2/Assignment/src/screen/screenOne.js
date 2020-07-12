import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { BaseScreen, Icon } from '@base';
import { listData } from '@constant'

class ScreenOne extends BaseScreen {

    renderAvatar = () => {
        return (
            <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={{ uri: 'https://avatarfiles.alphacoders.com/153/thumb-153875.jpg' }}
                    style={{ width: 90, height: 90, borderColor: '#e4e4e4', borderWidth: 2, borderRadius: 45 }}
                />
            </View>
        )
    }

    renderOneButton = (label, icon, size, color) => {
        return (
            <View style={{ width: size, justifyContent: 'center', alignItems: 'center', backgroundColor: color, paddingTop: 5, paddingBottom: 5, borderRadius: 30 }}>
                <TouchableOpacity hitSlop={{ left: 30, right: 30 }}>
                    {label ? <Text style={{ color: '#fff', fontWeight: '600' }}>{label}</Text> : <Icon name={icon} type={'FontAwesome'} style={{ color: '#fff', fontSize: 16 }} />}
                </TouchableOpacity>
            </View>
        )
    }
    renderButton = () => {
        return (
            <View style={{ flexDirection: 'row' }}>
                {this.renderOneButton('Follow', null, '50%', '#3c73ff')}
                <View style={{ width: '5%' }} />
                {this.renderOneButton(null, 'send', '30%', '#56d9fe')}
            </View>
        )
    }

    renderDetailInformation = () => {
        return (
            <View style={{ paddingLeft: 20, width: '70%' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#2c314d' }}>Trinh Ngoc Huy</Text>
                <Text style={{ color: "#c2c5d2", paddingTop: 5, fontWeight: '600', paddingBottom: 10 }}>Developer</Text>
                {this.renderButton()}
            </View>
        )
    }

    renderInformation = () => {
        return (
            <View style={{ marginBottom: 30 }}>
                <View style={{ flexDirection: 'row', width: '100%', marginBottom:10 }}>
                    {this.renderAvatar()}
                    {this.renderDetailInformation()}
                </View>
                {this.renderBarInformation()}
            </View>
        )
    }

    renderItemBar = (total, label) => {
        return (
            <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{total}</Text>
                <Text style={{ color: '#c3c3c3' }}>{label}</Text>
            </View>
        )
    }

    renderBarInformation = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                {this.renderItemBar('210', 'Photos')}
                {this.renderItemBar('15k', 'Followers')}
                {this.renderItemBar('605', 'Following')}
            </View>
        )
    }
    renderItemImage = item => {

        return (
            <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                <Image
                    source={{ uri: item.url }}
                    style={{ width: '95%', height: null, aspectRatio: 1, borderRadius: 10 }}
                />
            </View>
        )
    }
    renderList = () => {
        return (
            <FlatList
                ListHeaderComponent={this.renderInformation()}
                data={listData}
                renderItem={({ item }) => this.renderItemImage(item)}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        )
    }

    renderContent = () => {
        return (
            <View style={{ padding: 20, marginTop:30 }}>
                {this.renderList()}
            </View>
        )
    }
}

export default ScreenOne;