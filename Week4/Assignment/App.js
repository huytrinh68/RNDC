import React, { useState } from 'react'
import RootNavigation from './src/navigation/rootNavigation'
import { Data, Storage } from '@helper'

const App = () => {

  Storage.getDataSaved().then(response => {
    if (!response) {
      Storage.saveData(Data.TODOS)
    }
    return
  })
  return <RootNavigation />
}
export default App