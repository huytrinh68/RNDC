import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

const LoadingPage = () => {
    return (
        <View style={styles.loading}>
            <ActivityIndicator color={'black'} size={'large'} />
        </View>
    )
}

const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        width: '100%',
        height: '120%',
        backgroundColor: '#00000033',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999999
    }
})
export default LoadingPage