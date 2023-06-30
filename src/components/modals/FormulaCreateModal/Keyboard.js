import React from 'react';
import { View } from 'react-native';
import KeyboardButton from './KeyboardButton';
import styles from './formulaCreateModal.css'
import CrossSignSVG from '../../SVG/CrossSignSVG';
import ClearButtonSVG from '../../SVG/ClearButtonSVG';
import DivisionSignSVG from '../../SVG/DivisionSignSVG';

const Keyboard = ({ handlePress, handleClearAll, handleClear }) => {
    return (
        <View style={styles.constructorKeyboard}>
            <View style={styles.constructorKeyboard_line}>
                <KeyboardButton value={'('} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_small}>(</KeyboardButton>

                <KeyboardButton value={')'} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_small}>)</KeyboardButton>

                <KeyboardButton value={''} onPress={handleClearAll} btnStyle={styles.constructorKeyboardButton_small}>CE</KeyboardButton>

                <KeyboardButton value={''} onPress={handleClear} btnStyle={styles.constructorKeyboardButton_small}>
                    <ClearButtonSVG />
                </KeyboardButton>
            </View>

            <View style={styles.constructorKeyboard_line}>
                <KeyboardButton value={'+'} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_small}>+</KeyboardButton>

                <KeyboardButton value={'-'} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_small}>-</KeyboardButton>

                <KeyboardButton value={'*'} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_small}>
                    <CrossSignSVG stroke='#000000' />
                </KeyboardButton>

                <KeyboardButton value={'/'} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_small}>
                    <DivisionSignSVG />
                </KeyboardButton>
            </View>

            <View style={styles.constructorKeyboard_line}>
                <KeyboardButton value={'baseValue'} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_large}>Базовая цена</KeyboardButton>

                <KeyboardButton value={'protein'} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_large}>Белок</KeyboardButton>
            </View>

            <View style={styles.constructorKeyboard_line}>
                <KeyboardButton value={'fat'} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_large}>Жирность</KeyboardButton>

                <KeyboardButton value={'sort'} onPress={handlePress} btnStyle={styles.constructorKeyboardButton_large}>Сорт</KeyboardButton>
            </View>

        </View>
    );
}

export default Keyboard;
