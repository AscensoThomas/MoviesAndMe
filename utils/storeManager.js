import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key, value, isArray = false, addValue = true) => {
    try {
        if ((typeof value) !== 'string')
            value = JSON.stringify(value);

        if (isArray) {
            let array = await AsyncStorage.getItem(key)
            if (array == null) {
                array = []
            } else {
                array = JSON.parse(array)
            }

            if (addValue) {
                array.push(value)
            } else {
                let index = array.indexOf(value)
                if (index !== -1)
                    array.splice(index, 1)
            }

            array = JSON.stringify(array)
            await AsyncStorage.setItem(key, array)

        } else {
            await AsyncStorage.setItem(key, value)
        }


    } catch (e) {
        console.log('error async ', e)
    }
}

export const getData = async (key, isArray = false) => {
    try {
        let value = null
        if (isArray) {
            value = await AsyncStorage.getItem(key)
            if (value == null) {
                value = []
            } else {
                value = array = JSON.parse(value)
            }
            //console.log('test', value)
        } else {
            value = await AsyncStorage.getItem(key)
        }

        if (value !== null) {
            // value previously stored
        }
        return value
    } catch (e) {
        console.log('error async ', e)
    }
}