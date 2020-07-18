import React, { useState } from 'react'
import { View } from 'react-native'
import { PanelResult, TouramentTable, ChooseAction } from '@component'

const App = () => {
  const [choose, setChoose] = useState(0)
  const [computer, setComputer] = useState(0)

  return (
    <View style={{ alignItems: 'center', marginTop: 30 }}>
      <PanelResult
        choose={choose}
        computer={computer}
      />
      <TouramentTable
        choose={choose}
        computer={computer}
      />
      <ChooseAction
        choose={choose}
        computer={computer}
        setChoose={setChoose}
        setComputer={setComputer}
      />
    </View>
  )
}
export default App