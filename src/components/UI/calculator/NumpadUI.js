import React from 'react';
import { View } from 'react-native';
import KeyboardButtonUI from './KeyboardButtonUI';
import styles from './calculatorUI.css'

const NumpadUI = ({ onPress }) => {
    return (
        <View style={styles.constructorKeyboard}>
            <View style={styles.constructorKeyboard_line}>
                <KeyboardButtonUI value={'1'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>1</KeyboardButtonUI>

                <KeyboardButtonUI value={'2'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>2</KeyboardButtonUI>

                <KeyboardButtonUI value={'3'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>3</KeyboardButtonUI>

                <KeyboardButtonUI value={'4'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>
                    4
                </KeyboardButtonUI>
            </View>

            <View style={styles.constructorKeyboard_line}>
                <KeyboardButtonUI value={'5'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>5</KeyboardButtonUI>

                <KeyboardButtonUI value={'6'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>6</KeyboardButtonUI>

                <KeyboardButtonUI value={'7'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>
                    7
                </KeyboardButtonUI>

                <KeyboardButtonUI value={'8'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>
                    8
                </KeyboardButtonUI>
            </View>

            <View style={styles.constructorKeyboard_line}>
                <KeyboardButtonUI value={'9'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>
                    9
                </KeyboardButtonUI>

                <KeyboardButtonUI value={'0'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>
                    0
                </KeyboardButtonUI>

                <KeyboardButtonUI value={'.'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_large}>.</KeyboardButtonUI>
            </View>
        </View>
    );
}

export default NumpadUI;
