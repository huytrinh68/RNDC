import React from 'react'
import { SafeAreaView } from 'react-native'
import { Header, Bottom } from '@base'

class BaseScreen extends React.Component {

    renderContent = () => {
        return null
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Header parent={this} />
                {this.renderContent()}
                <Bottom />
            </SafeAreaView>
        )
    }
}

export default BaseScreen;