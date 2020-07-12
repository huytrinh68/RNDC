import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from '@base'
import { ScreenOne, ScreenTwo } from '@screen'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screenSelected: 0
    }
  }

  handleChooseScreen = (type) => {
    this.setState({
      screenSelected: type
    })
  }

  renderItemChooseScreen = (label) => {
    return (
      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 150, height: 50, borderColor: '#e4e4e4', borderWidth: 1, marginBottom: 20, borderRadius: 5 }}
        onPress={() => this.handleChooseScreen(label === "Screen One" ? 1 : 2)}
      >
        <Icon type={'Foundation'} name={'projection-screen'} style={{ color: 'gray' }} />
        <Text style={{ paddingLeft: 10, fontSize: 18, fontWeight: 'bold', color: 'gray' }}>{label}</Text>
      </TouchableOpacity>
    )
  }

  renderChooseScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {this.renderItemChooseScreen('Screen One')}
        {this.renderItemChooseScreen('Screen Two')}
      </View>
    )
  }

  renderOtherScreen = (type) => {
    return type === 1 ? <ScreenOne parent={this}/> : <ScreenTwo parent={this}/>
  }

  render() {
    switch (this.state.screenSelected) {
      case 0:
        return this.renderChooseScreen();
        break;
      default:
        return this.renderOtherScreen(this.state.screenSelected);
        break;
    }
  }
}