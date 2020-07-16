import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Images } from '@media'

let playerPoint = 0
let computerPoint = 0

const App = () => {
  const [choose, setChoose] = useState(0)
  const [computer, setComputer] = useState(0)

  const player = (name, value) => {
    return (
      <View style={{ width: '49%', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ color: '#FF0000', fontSize: 20 }}>{value}</Text>
      </View>
    )
  }

  const handleResult = () => {
    if (!computer) return
    if (computer === choose) {
      return "Hoà rồi =.="
    }
    else if (choose === 1 && computer === 2 || choose === 2 && computer === 3 || choose === 3 && computer === 1) {
      computerPoint++
      return "Bạn thua rồi !_!"
    }
    else {
      playerPoint++
      return "Bạn thắng rồi nhé :v"
    }
  }

  const panelResult = () => {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 20 }}>{handleResult()}</Text>
        <View style={{ flexDirection: 'row' }}>
          {player('Bạn', playerPoint)}
          <View style={{ width: '0.5%', backgroundColor: '#e4e4e4' }} />
          {player('Máy', computerPoint)}
        </View>
      </View>
    )
  }

  const switchName = type => {
    switch (type) {
      case 1:
        return "Kéo";
      case 2:
        return "Búa";
      case 3:
        return "Bao";
      default:
        return null
    }
  }

  const imageChoose = (source, name, type) => {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={source}
          style={{ width: 100, height: 100 }}
        />
        <Text style={{fontWeight:'bold', marginTop:10}}>{switchName(name)}</Text>
      </View>
    )
  }

  const oneLine = () => {
    return (
      <View
        style={{
          width: 3,
          height: 100,
          backgroundColor: '#e3e3e3'
        }}
      />
    )
  }

  const linePagina = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>
        {oneLine()}
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            borderWidth: 3,
            borderColor: '#e3e3e3'
          }}
        />
        {oneLine()}
      </View>
    )
  }

  const tournamentTable = () => {
    return (
      <View style={{
        width: '100%',
        height: 300,
        borderRadius: 100,
        borderColor: '#c3c3c3',
        borderWidth: 3,
        marginTop: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20
      }}>
        {imageChoose(switchTypeAction(choose), choose, 1)}
        {linePagina()}
        {imageChoose(switchTypeAction(computer), computer, 2)}
      </View>
    )
  }

  const switchTypeAction = type => {
    switch (type) {
      case 1:
        return Images.Scissors
      case 2:
        return Images.Hammer
      case 3:
        return Images.Paper
      default:
        return null
    }
  }

  const switchTypeColor = type => {
    switch (type) {
      case 1:
        return "green"
      case 2:
        return "orange"
      case 3:
        return "violet"
      default:
        return null
    }
  }

  const handleAction = type => {
    setComputer(computer => Math.floor(Math.random() * 3) + 1)
    switch (type) {
      case 1:
        setChoose(choose => 1)
        break;
      case 2:
        setChoose(choose => 2)
        break;
      case 3:
        setChoose(choose => 3)
        break;
    }
  }

  const itemAction = (label, value) => {
    return (
      <TouchableOpacity
        onPress={() => handleAction(value)}
        style={{ width: 140, height: 40, backgroundColor: switchTypeColor(value), marginTop: 5, marginBottom: 5, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>{label}</Text>
      </TouchableOpacity>
    )
  }

  const chooseAction = () => {
    return (
      <View style={{ marginTop: 20 }}>
        {itemAction('Kéo', 1)}
        {itemAction('Búa', 2)}
        {itemAction('Bao', 3)}
      </View>
    )
  }

  return (
    <View style={{ alignItems: 'center', marginTop: 30 }}>
      {panelResult()}
      {tournamentTable()}
      {chooseAction()}
    </View>
  )
}
export default App