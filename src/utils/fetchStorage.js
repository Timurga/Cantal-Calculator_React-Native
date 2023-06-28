import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchStorage = async () => {
    const keys = await AsyncStorage.getAllKeys();
    console.log();
    if (keys.length === 0) {
        return { containerContent: [], isContainerEmpty: true };
    }

    const content = [];

    for (let i = 0; i < keys.length; i++) {
        const keyData = await AsyncStorage.getItem(keys[i]);

        if(typeof JSON.parse(keyData).formulaName !== 'string') {
            return
        }
        
        content.push(JSON.parse(keyData)); // parse the data from storage
    }

    return { containerContent: content, isContainerEmpty: false };
};
