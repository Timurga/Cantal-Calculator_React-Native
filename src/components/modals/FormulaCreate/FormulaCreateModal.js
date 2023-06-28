import React, { useState } from 'react';
import { Alert, Modal, Pressable, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './formulaCreateModal.css'
import CrossSignSVG from '../../SVG/CrossSignSVG';
import KeyboardButton from './KeyboardButton';
import ClearButtonSVG from '../../SVG/ClearButtonSVG';
import DivisionSignSVG from '../../SVG/DivisionSignSVG';
import ButtonUI from '../../UI/ButtonUI';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FormulaCreate = ({ visible, onClose }) => {
    const [formula, setFormula] = useState('')
    const [formulaCalc, setFormulaCalc] = useState('')
    const [formulaName, setFormulaName] = useState('Новая формула')
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const handlePress = (value, children) => {
        setFormula(formula + value)
        setFormulaCalc(formulaCalc + children)
    }

    const handleClear = () => {
        setFormula(formula.slice(0, -1))
        setFormulaCalc(formulaCalc.slice(0, -1))
    }

    const handleClearAll = () => {
        setFormula('')
        setFormulaCalc('')
    }

    const handleSave = async () => {
        try {
            if (formula === '' || formulaCalc === '') {
                throw new Error
            }

            const jsonValue = JSON.stringify({
                formulaShow: formula,
                formulaCalculation: formulaCalc,
                formulaName: formulaName,
                id: `file_${Date.now()}`
            })
            await AsyncStorage.setItem(`file_${Date.now()}`, jsonValue)
            
            onClose()

            Alert.alert('Создание формулы', 'Создано успешно', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('Формула создана') },
            ]);

            setFormula('')
            setFormulaCalc('')
            setFormulaName('Новая формула')
        } catch (e) {
            Alert.alert('Создание формулы', 'Ошибка', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Ошибка при создании формулы'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
    }


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                onClose();
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalTitle}>
                        <TextInput value={formulaName} onChangeText={text => setFormulaName(text)} style={styles.modalFormulaName} />
                        <Pressable
                            style={[styles.buttonClose]}
                            onPress={onClose}>
                            <CrossSignSVG stroke='#fff' />
                        </Pressable>
                    </View>

                    <View style={styles.separator}></View>

                    <View style={styles.constructorContainer}>
                        <Text>{formula === '' ? 'Начните набирать формулу' : formula}</Text>
                    </View>

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

                    <ButtonUI onClick={handleSave}>Создать</ButtonUI>
                </View>
            </View>
        </Modal>
    );
}

export default FormulaCreate;
