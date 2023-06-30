import React from 'react';
import styles from './formulaListItem.css'
import { Pressable, Text, View } from 'react-native';

const FormulaListItem = ({ id, name, formula, children, pressable, onPress }) => {
    return (
        <>
            {pressable
                ? <Pressable style={styles.formulaContainer} onPress={onPress}>
                    <Text style={styles.formulaContainer__title}>{name}</Text>
                    <Text style={styles.formulaContainer__formula}>{formula}</Text>
                    {children}
                </Pressable>
                : <View style={styles.formulaContainer}>
                    <Text style={styles.formulaContainer__title}>{name}</Text>
                    <Text style={styles.formulaContainer__formula}>{formula}</Text>
                    {children}
                </View>
            }
        </>
    );
}

export default FormulaListItem;
