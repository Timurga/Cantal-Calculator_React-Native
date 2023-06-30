import React from 'react';
import { View } from 'react-native';
import KeyboardButtonUI from './KeyboardButtonUI';
import styles from './calculatorUI.css';
import CrossSignSVG from '../../SVG/CrossSignSVG';
import ClearButtonSVG from '../../SVG/ClearButtonSVG';
import DivisionSignSVG from '../../SVG/DivisionSignSVG';

const KeyboardUI = ({ handlePress, handleClearAll, handleClear }) => {
    return (
        <View style={styles.constructorKeyboard}>
            <View style={styles.constructorKeyboard_line}>
                <KeyboardButtonUI value={'('} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_small}>(</KeyboardButtonUI>

                <KeyboardButtonUI value={')'} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_small}>)</KeyboardButtonUI>

                <KeyboardButtonUI value={''} onPress={handleClearAll} btnStyle={styles.constructorKeyboardButton_small}>CE</KeyboardButtonUI>

                <KeyboardButtonUI value={''} onPress={handleClear} btnStyle={styles.constructorKeyboardButton_small}>
                    <ClearButtonSVG />
                </KeyboardButtonUI>
            </View>

            <View style={styles.constructorKeyboard_line}>
                <KeyboardButtonUI value={'+'} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_small}>+</KeyboardButtonUI>

                <KeyboardButtonUI value={'-'} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_small}>-</KeyboardButtonUI>

                <KeyboardButtonUI value={'*'} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_small}>
                    <CrossSignSVG stroke='#000000' />
                </KeyboardButtonUI>

                <KeyboardButtonUI value={'/'} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_small}>
                    <DivisionSignSVG />
                </KeyboardButtonUI>
            </View>

            <View style={styles.constructorKeyboard_line}>
                <KeyboardButtonUI value={'baseValue'} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_large}>Базовая цена</KeyboardButtonUI>

                <KeyboardButtonUI value={'protein'} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_large}>Белок</KeyboardButtonUI>
            </View>

            <View style={styles.constructorKeyboard_line}>
                <KeyboardButtonUI value={'fat'} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_large}>Жирность</KeyboardButtonUI>

                <KeyboardButtonUI value={'sort'} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_large}>Сорт</KeyboardButtonUI>
            </View>

        </View>
    );
}

export default KeyboardUI;
