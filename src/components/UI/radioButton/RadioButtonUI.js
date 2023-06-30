import React from 'react';
import styles from './radioButton.css';
import { View, TouchableOpacity, Text } from 'react-native';

const RadioButtonUI = ({ children, value, setValue }) => {
    return (
        <View style={styles.textInputContainer}>
            <Text>{children}</Text>
            <TouchableOpacity
                onPress={() => setValue(prevType => !prevType)}
                activeOpacity={0.7}
                style={{ marginTop: 15 }}
            >
                <View style={styles.radioButtonContainer}>
                    <View style={{ backgroundColor: value ? 'white' : '#198C4F', borderRadius: 10 }}>
                        <Text style={[styles.radioButtonText, { color: value ? 'black' : 'white' }]}>1</Text>
                    </View>

                    <View style={{ backgroundColor: value ? '#198C4F' : 'white', borderRadius: 10 }}>
                        <Text style={[styles.radioButtonText, { color: value ? 'white' : 'black' }]}>1.1</Text>
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    );
}

export default RadioButtonUI;
