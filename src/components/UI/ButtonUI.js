import React from 'react';
import styles from '../../screens/styles.css';
import { Text, TouchableOpacity } from 'react-native';

const ButtonUI = ({ children, onClick }) => {
    return (
        <TouchableOpacity onPress={onClick} activeOpacity={0.8} style={styles.calculateButton}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    );
}

export default ButtonUI;
