import { AsyncStorage } from 'react-native'
class Storage {

    static getDataSaved = async () => {
        try {
            const data = await AsyncStorage.getItem('dataLocal')
            return data
        }
        catch (e) {
            console.log(e)
        }
    }
    static saveData = async (data) => {
        try {
            const dataString = JSON.stringify(data)
            await AsyncStorage.setItem('dataLocal', dataString)
        }
        catch (e) {
            console.log(e)
        }
    }
}
export default Storage