import React, { useState } from 'react';
import { Alert, Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { Switch, TextInput } from 'react-native-paper';
import styles from './formulaCreateModal.css'
import CrossSignSVG from '../../SVG/CrossSignSVG';
import KeyboardButton from './KeyboardButton';
import ButtonUI from '../../UI/ButtonUI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Numpad from './Numpad';
import Keyboard from './Keyboard';

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
                { text: 'OK'},
            ]);

            setFormula('')
            setFormulaCalc('')
            setFormulaName('Новая формула')
        } catch (e) {
            Alert.alert('Создание формулы', 'Ошибка', [
                { text: 'OK'},
            ]);
        }
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalTitle}>
                        <TextInput value={formulaName} onChangeText={text => setFormulaName(text)} style={styles.modalFormulaName} />
                        <Pressable
                            style={styles.buttonClose}
                            onPress={onClose}>
                            <CrossSignSVG stroke='#fff' />
                        </Pressable>
                    </View>

                    <View style={styles.separator}></View>

                    <View style={styles.constructorContainer}>
                        <Text>{formula === '' ? 'Начните набирать формулу' : formula}</Text>
                    </View>
                    <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                        <Keyboard handleClear={handleClear} handleClearAll={handleClearAll} handlePress={handlePress}/>
                        
                        <View style={styles.separator}></View>

                        <View style={styles.numpadKeyboard}>
                            <View style={styles.numpadActivate}>
                                <Text>Показать цифровую клавиатуру</Text>
                                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color='#92C46D' />
                            </View>

                            {
                                isSwitchOn
                                    ? <Numpad onPress={handlePress}/>
                                    : <View></View>
                            }
                        </View>

                        <ButtonUI onClick={handleSave}>Создать</ButtonUI>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}

export default FormulaCreate;
