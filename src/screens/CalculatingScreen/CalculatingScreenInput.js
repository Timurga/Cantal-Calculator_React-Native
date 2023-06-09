import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from '../styles.css'

const CalculatingScreenInput = ({ affix, children, value, setValue }) => {
    return (
        <View style={styles.textInputContainer}>
            <Text style={styles.containerText}>{children}</Text>
            <TextInput
                mode='outlined'
                keyboardType='numeric'
                value={value}
                onChangeText={value => setValue(value)}
                outlineStyle={{ borderRadius: 10, borderColor: '#92C46D' }}
                right={<TextInput.Affix text={affix} />}
                style={{ marginTop: 15 }}
            />
        </View>
    );
}

export default CalculatingScreenInput;
