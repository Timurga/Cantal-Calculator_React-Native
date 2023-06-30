import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './formulaSelectButton.css'

const FormulaSelectButton = ({ children, SVG, onPress, listFilled }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={listFilled ? styles.formulaSelectItem : [styles.formulaSelectItem, styles.formulaSelectItem__filledList]}>
            {SVG}
            <Text style={listFilled ? styles.containerText : [styles.containerText, styles.containerText__filledList]}>{children}</Text>
        </TouchableOpacity>
    );
}

export default FormulaSelectButton;
