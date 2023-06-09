import React, { useState } from 'react';
import { Alert, Modal, Pressable, Text, View } from 'react-native';
import styles from './formulaCreateModal.css'
import CrossSignSVG from '../../SVG/CrossSignSVG';
import KeyboardButton from './KeyboardButton';
import ClearButtonSVG from '../../SVG/ClearButtonSVG';
import DivisionSignSVG from '../../SVG/DivisionSignSVG';

const FormulaCreate = ({ visible, onClose }) => {
    const [formula, setFormula] = useState('')

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
                        <Text style={styles.modalTitleText}>Новая формула</Text>
                        <Pressable
                            style={[styles.buttonClose]}
                            onPress={onClose}>
                            <CrossSignSVG stroke='#fff'/>
                        </Pressable>
                    </View>

                    <View style={styles.separator}></View>

                    <View style={styles.constructorContainer}>
                        <Text>{formula === '' ? 'Начните набирать формулу' : formula}</Text>
                    </View>

                    <View style={styles.constructorKeyboard}>
                        <KeyboardButton>(</KeyboardButton>
                        <KeyboardButton>)</KeyboardButton>
                        <KeyboardButton>CE</KeyboardButton>
                        <KeyboardButton>
                            <ClearButtonSVG/>
                        </KeyboardButton>
                        <KeyboardButton>+</KeyboardButton>
                        <KeyboardButton>-</KeyboardButton>
                        <KeyboardButton><CrossSignSVG stroke='#000000'/></KeyboardButton>
                        <KeyboardButton><DivisionSignSVG /></KeyboardButton>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default FormulaCreate;
