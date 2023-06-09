import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles.css'

const CalculatingScreenFormulaSelect = ({ children, SVG, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.formulaSelectItem}>
            {SVG}
            <Text style={styles.containerText}>{children}</Text>
        </TouchableOpacity>
    );
}

export default CalculatingScreenFormulaSelect;
