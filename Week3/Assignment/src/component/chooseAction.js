import React from 'react'
import { TouchableOpacity, Image, Text, View } from 'react-native'
import { Identify } from '@common'

const ChooseAction = ({ setComputer, setChoose }) => {

    const handleAction = type => {
        setComputer(Math.floor(Math.random() * 3) + 1)
        switch (type) {
            case 1:
                setChoose(1)
                break;
            case 2:
                setChoose(2)
                break;
            case 3:
                setChoose(3)
                break;
        }
    }

    const itemAction = (label, value) => {
        return (
            <TouchableOpacity
                onPress={() => handleAction(value)}
                style={{
                    width: 90,
                    height: 90,
                    marginTop: 5,
                    marginBottom: 5,
                    borderRadius: 10,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    borderColor: Identify.switchTypeColor(value),
                    borderWidth: 1,
                    overflow: 'hidden'
                }}
            >
                <Image
                    source={Identify.switchTypeAction(value)}
                    style={{ width: 70, height: 70 }}
                />
                <Text style={{
                    fontWeight: 'bold',
                    color: '#ffffff',
                    paddingLeft: 10,
                    fontSize: 12,
                    backgroundColor: Identify.switchTypeColor(value),
                    width: '100%',
                    textAlign: 'center',
                }}>{label}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{
            width: '100%',
            marginTop: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            paddingRight: 20
        }}>
            {itemAction('Scissors', 1)}
            {itemAction('Rock', 2)}
            {itemAction('Paper', 3)}
        </View>
    )
}
export default ChooseAction