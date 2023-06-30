import React from 'react';
import { View } from 'react-native';
import KeyboardButton from './KeyboardButton';
import styles from './formulaCreateModal.css'

const Numpad = ({ onPress }) => {
    return (
        <View style={styles.constructorKeyboard}>
            <View style={styles.constructorKeyboard_line}>
                <KeyboardButton value={'1'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>1</KeyboardButton>

                <KeyboardButton value={'2'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>2</KeyboardButton>

                <KeyboardButton value={'3'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>3</KeyboardButton>

                <KeyboardButton value={'4'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>
                    4
                </KeyboardButton>
            </View>

            <View style={styles.constructorKeyboard_line}>
                <KeyboardButton value={'5'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>5</KeyboardButton>

                <KeyboardButton value={'6'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>6</KeyboardButton>

                <KeyboardButton value={'7'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>
                    7
                </KeyboardButton>

                <KeyboardButton value={'8'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>
                    8
                </KeyboardButton>
            </View>

            <View style={styles.constructorKeyboard_line}>
                <KeyboardButton value={'9'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>
                    9
                </KeyboardButton>

                <KeyboardButton value={'0'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_small}>
                    0
                </KeyboardButton>

                <KeyboardButton value={'.'} onPress={onPress} btnStyle={styles.constructorKeyboardButton_large}>.</KeyboardButton>
            </View>
        </View>
    );
}

export default Numpad;
