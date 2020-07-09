import React from 'react'
import { View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView, FlatList, Dimensions } from 'react-native'
import { images } from './constant'

const listData = [
  {
    id: 1,
    image: 'https://i.pinimg.com/originals/c4/9e/04/c49e046e20c75b74f739c227f9500551.jpg'
  },
  {
    id: 2,
    image: 'https://images8.alphacoders.com/748/thumb-350-748446.png'
  },
  {
    id: 3,
    image: 'https://c4.wallpaperflare.com/wallpaper/810/692/33/my-neighbor-totoro-studio-ghibli-totoro-wallpaper-preview.jpg'
  },
]
export default class App extends React.Component {

  renderHeader = () => {
    return (
      <View style={{ width: '100%', height: 60, backgroundColor: '#c3c3c3', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <View style={{ width: '20%' }} />
        <View style={{ width: '60%', alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={require('./assest/logo.png')}
            style={{ width: 100, height: 70 }}
            resizeMode="contain"
          />
        </View>
        <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity>
            <Image
              source={require('./assest/inbox.png')}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderInformation = () => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('./assest/icon.png')}
          style={{ width: 90, height: 90 }}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Trịnh Ngọc Huy</Text>
      </View>
    )
  }

  renderImage = (item) => {
    let { width } = Dimensions.get('window')
    return (
      <View style={{}}>
        <Image
          source={{ url: item.image }}
          style={{ height: 300 }}
        />
      </View>
    )
  }
  renderAction = () => {
    return (
      <View style={{ flexDirection: 'row', paddingLeft: 10, paddingTop:5 }}>
        <TouchableOpacity onPress={() => alert('Heart')}>
          <Image
            source={require('./assest/heart.png')}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Comment')}>
          <Image
            source={require('./assest/comment.png')}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Export')}>
          <Image
            source={require('./assest/export.png')}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>

      </View>
    )
  }

  oneItem = (item, index) => {
    return (
      <View style={{ marginBottom: 50, borderBottomColor:'#c3c3c3', borderBottomWidth:0.5, paddingBottom:10 }}>
        {this.renderInformation()}
        {this.renderImage(item)}
        {this.renderAction()}
      </View>
    )
  }

  renderListItem = () => {
    return (
      <FlatList
        data={listData}
        renderItem={({ item, index }) => {
          console.log(item)
          return this.oneItem(item, index)
        }}
        keyExtractor={item => item.id}
      />
    )
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {this.renderHeader()}
        {this.renderListItem()}
      </SafeAreaView>
    )
  }
}