import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'

class Lab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVNDtoUSD: 1,
            monney: 0
        }
    }

    handleText = text => {
        this.setState({ monney: text })
    }
    handleChoose = type => {
        if (type === 0) {
            this.setState({ isVNDtoUSD: 0 })
        }
        else this.setState({ isVNDtoUSD: 1 })
    }
    renderButtonChoose = (label, type) => {
        return (
            <TouchableOpacity
                onPress={() => this.handleChoose(type)}
                style={{
                    width: 150,
                    height: 40,
                    borderColor: '#c3c3c3',
                    borderWidth: 1,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: type ? (this.state.isVNDtoUSD ? '#e4e4e4' : '#fff') : (!this.state.isVNDtoUSD ? '#e4e4e4' : '#fff'),
                    marginTop: 5,
                    marginBottom: 5
                }}
            >
                <Text>{label}</Text>
            </TouchableOpacity>
        )
    }

    renderResult = (label, value) => {
        return (
            <View style={{ width: '49%', alignItems: 'center', justifyContent: 'center', paddingBottom: 10 }}>
                <Text style={{ fontWeight: '500' }}>{label}</Text>
                <Image
                    source={label === 'Đơn vị hiện tại' ? (this.state.isVNDtoUSD ? require('./assests/vietnam2.png') : require('./assests/usa.png')) : (!this.state.isVNDtoUSD ? require('./assests/vietnam2.png') : require('./assests/usa.png'))}
                    style={{ width: 30, height: 15, marginTop: 10, marginBottom: 10 }}
                />
                <Text style={{ paddingTop: 10, paddingBottom: 10 }}>{value}</Text>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView
                    contentContainerStyle={{ alignItems: 'center', marginTop: 100 }}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Form đổi tiền nè =.=!!</Text>
                    <TextInput
                        style={{ width: 250, height: 50, borderRadius: 10, borderColor: '#c3c3c3', borderWidth: 1, marginTop: 20, paddingLeft: 30, marginBottom: 30 }}
                        onChangeText={text => this.handleText(text)}
                        placeholder={"Muốn đổi bao nhiêu ???"}
                        keyboardType={'number-pad'}
                    />
                    {this.renderButtonChoose('VND -> USD', 1)}
                    {this.renderButtonChoose('USD -> VND', 0)}
                    <View style={{ marginTop: 30, flexDirection: 'row' }}>
                        {this.renderResult('Đơn vị hiện tại', this.state.monney !== 0 ? (this.state.isVNDtoUSD ? (this.state.monney*1).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) : (this.state.monney * 1).toLocaleString('it-IT', { style: 'currency', currency: 'USD' })): null)}
                        <View style={{ width: '0.4%', backgroundColor: '#c3c3c3' }} />
                        {this.renderResult('Đơn vị sau quy đổi', this.state.monney !== 0 ? (this.state.isVNDtoUSD ? (this.state.monney / 23000).toLocaleString('it-IT', { style: 'currency', currency: 'USD' }) : (this.state.monney * 23000).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })) : null)}
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
export default Lab