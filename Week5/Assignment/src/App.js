import React, { useState, useEffect, useMemo } from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import { BASE_URL } from './constant'
import ItemProduct from './component/ItemProduct'
import LoadingPage from './component/LoadingPage'

const App = () => {
  const [data, setData] = useState(null)
  const [params, setParams] = useState({ limit: 5, page: 1 })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const url = `${BASE_URL}?limit=${params.limit}&page=${params.page}`
      const response = await fetch(url)
      let responseJSON = await response.json()
      let newData;
      if (data) {
        newData = data
        newData = newData.concat(responseJSON.products)
      }
      else {
        newData = responseJSON.products
      }
      setData(newData)
      setLoading(false)
    }
    fetchData();
  }, [params])

  const handleLoadMore = () => {
    let newPage = params.page
    if (newPage === 5) {
      return
    }
    else {
      newPage += 1
    }
    setParams({ limit: 5, page: newPage })
  }
  return (
    <SafeAreaView
      style={styles.container}>
      {loading && <LoadingPage />}
      <FlatList
        data={data}
        renderItem={({ item }) => <ItemProduct item={item} />}
        keyExtractor={item => item.entity_id}
        contentContainerStyle={styles.content_flatlist}
        onEndReached={() => handleLoadMore()}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content_flatlist: {
    padding: 15,
    paddingTop: 20
  }
})
export default App