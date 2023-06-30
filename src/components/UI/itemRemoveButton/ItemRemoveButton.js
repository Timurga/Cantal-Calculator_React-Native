import React from 'react';
import styles from './itemRemoveButton.css'
import { Pressable, Text } from 'react-native';
import CrossSignSVG from '../../SVG/CrossSignSVG';

const ItemRemoveButton = ({ onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.selectButton}>
            <CrossSignSVG stroke='#ffffff' height={11} width={11} />
        </Pressable>
    );
}

export default ItemRemoveButton;
