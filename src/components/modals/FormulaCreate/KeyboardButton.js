import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './formulaCreateModal.css'

const KeyboardButton = ({children}) => {
    return (
        <Pressable style={styles.constructorKeyboardButton}>
            <Text style={styles.keyboardButtonText}>{children}</Text>
        </Pressable>
    );
}

export default KeyboardButton;
