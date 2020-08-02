import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { Card, Icon } from 'native-base'
import StarRating from 'react-native-star-rating'

const ItemProduct = ({ item }) => {
    const [showModal, setShowModal] = useState(false)

    const showDetail = item => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }

    const buttonDetail = () => {
        return (
            <TouchableOpacity
                style={styles.touchable}
                onPress={() => showDetail(item)}
            >
                <View style={styles.button_detail}>
                    <Text style={styles.text_detail}>DETAIL</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const renderMoreInformation = () => {
        return (
            <View style={styles.informationView}>
                <View>
                    <Text style={styles.description}>Description</Text>
                    <Text style={styles.short_description}>{item.short_description}</Text>
                </View>
                <TouchableOpacity style={styles.touchable_buy}>
                    <Icon
                        type={'AntDesign'}
                        name={'shoppingcart'}
                        style={styles.button_buy}
                    />
                    <Text style={styles.text_buy}>BUY NOW!</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const renderButtonClose = () => {
        return (
            <TouchableOpacity
                style={styles.closeButton}
                onPress={() => closeModal()}
            >
                <Icon
                    type={'EvilIcons'}
                    name={'close'}
                />
            </TouchableOpacity>
        )
    }
    const modalContent = () => {
        return (
            <Modal
                isVisible={showModal}
                onBackdropPress={() => closeModal()}
            >
                <View style={styles.modalView}>
                    {renderContentProduct()}
                    {renderMoreInformation()}
                    {renderButtonClose()}
                </View>
            </Modal>
        )
    }
    const renderContentProduct = () => {
        return (
            <View style={styles.content}>
                <View style={styles.coverImage}>
                    <Image
                        source={{ uri: item?.images[0]?.url }}
                        style={styles.image}
                        resizeMode={'contain'}
                    />
                </View>
                <Text style={styles.productName}>{item.name}</Text>
                <StarRating
                    maxStars={5}
                    fullStarColor={'#ffc107'}
                    rating={4.5}
                    disabled={true}
                    starSize={18}
                    containerStyle={styles.star_rating}
                />
                <Text style={styles.price}>{item.price} SAR</Text>
            </View>
        )
    }
    return (
        <Card style={styles.card}>
            {modalContent()}
            {renderContentProduct()}
            {buttonDetail()}
        </Card>
    )
}
const styles = StyleSheet.create({
    card: {
        padding: 5,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    coverImage: {
        padding: 5,
    },
    image: {
        width: 300,
        height: 200
    },
    productName: {
        fontWeight: '500',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    },
    star_rating: {
        width: 120,
        paddingTop: 5,
        paddingBottom: 5
    },
    price: {
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: '500'
    },
    touchable: {
        width: '60%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#7ac400',
        borderWidth: 1.2,
        borderRadius: 30,
        marginTop: 10,
        marginBottom: 20
    },
    button_detail: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_detail: {
        color: '#7ac400',
        fontWeight: '600'
    },
    modalView: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    informationView: {
        padding: 10,
        alignItems:'center'
    },
    description: {
        fontWeight: '700',
        paddingBottom: 10,
    },
    short_description: {
        color: 'gray',
        fontSize: 12,
        flexWrap: 'wrap'
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    touchable_buy: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '45%',
        height: 50,
        borderRadius: 30,
        borderColor: '#7ac400',
        borderWidth: 1.2,
        paddingLeft: 20,
        marginTop:40
    },
    text_buy: {
        color: '#7ac400',
        fontWeight: '800'
    },
    button_buy: {
        color: '#7ac400',
        fontSize: 22
    }
})
export default ItemProduct