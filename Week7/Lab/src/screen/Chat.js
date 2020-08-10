// @flow
import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

import FirebaseData from '../data/firebase';

class Chat extends React.Component {
    state = {
        messages: [],
    };

    get user() {
        return {
            _id: FirebaseData.uid,
            name: this.props.route.params.name,
        };
    }


    componentDidMount() {
        FirebaseData.get(message =>
            this.setState(previous => ({
                 messages: GiftedChat.append(previous.messages, message) 
            })))
    }

    componentWillUnmount() {
        FirebaseData.off();
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={FirebaseData.send}
                user={this.user}
            />
        );
    }
}

export default Chat;
