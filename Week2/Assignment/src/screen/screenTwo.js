import React from 'react'
import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import { BaseScreen, Icon } from '@base'
import { quoteData, listTag } from '@constant'

class ScreenTwo extends BaseScreen {

  renderImage = () => {
    return (
      <Image
        source={{ uri: 'http://s1.dmcdn.net/OLBXE/1280x720-PvU.jpg' }}
        style={{ width: '100%', aspectRatio: 1.5, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}
      />
    )
  }

  renderName = () => {
    return (
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <View style={{ width: '60%', justifyContent: 'center', alignItems: 'flex-start' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 28 }}>Ghibli Studio</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5, paddingBottom: 5 }}>
            <Icon type={'Entypo'} name={'location-pin'} style={{ fontSize: 18, color: '#c2c5d2' }} />
            <Text style={{ color: '#c2c5d2', fontSize: 16 }}>	Koganei, Tokyo, Japan</Text>
          </View>
        </View>
        <View style={{ width: '40%', justifyContent: 'center', alignItems: 'flex-end' }}>
          <View style={{
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#3c73ff',
            borderTopLeftRadius: 5,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20
          }}>
            <Icon type={'SimpleLineIcons'} name={'cloud-download'} style={{ fontSize: 28, color: '#fff' }} />
          </View>
        </View>
      </View>
    )
  }
  renderQuote = () => {
    return (
      <View style={{ marginTop: 25 }}>
        <Text style={{ fontWeight: '600', color:'#767b8c' }}>{quoteData}</Text>
      </View>
    )
  }

  renderTag = () => {
    return (
      <View style={{ marginTop: 20 }}>
        <FlatList
          horizontal={true}
          data={listTag}
          renderItem={({ item }) => {
            return (
              <View style={{ padding: 5, paddingLeft: 10, paddingRight: 10, backgroundColor: '#f5f7fb', marginRight: 5, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#adb1cc' }}>{item.value}</Text>
              </View>
            )
          }}
        />
      </View>
    )
  } 
  renderItemActionBar = (type, icon, size) => {
    return (
      <View style={{width:size, justifyContent:'center', alignItems:icon === 'ios-bookmark'? 'flex-end' : 'center', marginTop:30}}>
        <Icon name={icon} type={type} style={{color:'#adb1cc'}} />
      </View>
    )
  }
  renderActionBar = () => {
    return (
      <View style={{flexDirection:'row'}}>
        {this.renderItemActionBar('AntDesign','heart','10%')}
        {this.renderItemActionBar('Ionicons','chatbubble','20%')}
        {this.renderItemActionBar('Ionicons','ios-bookmark','70%')}
      </View>
    )
  }

  renderInformation = () => {
    return (
      <View style={{ paddingLeft: 30, paddingRight: 30 }}>
        {this.renderName()}
        {this.renderQuote()}
        {this.renderTag()}
        {this.renderActionBar()}
      </View>
    )
  }

  renderContent = () => {
    return (
      <ScrollView style={{}}>
        {this.renderImage()}
        {this.renderInformation()}
      </ScrollView>
    )
  }
}

export default ScreenTwo