import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './formulaCreateModal.css'

const KeyboardButton = ({children, btnStyle, onPress, value}) => {
    const handleClick = () => {
        onPress(children.length === 1 && children !== String || typeof children === 'object' ? value : children, children.length === 1 ? children : value)
    }

    return (
        <Pressable onPress={handleClick} style={btnStyle}>
            <Text style={styles.keyboardButtonText}>{children}</Text>
        </Pressable>
    );
}

export default KeyboardButton;
