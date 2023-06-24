import React, { useEffect } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';

import styles from './formulaListModal.css'
import CrossSignSVG from '../../SVG/CrossSignSVG';
import ScalesSVG from '../../SVG/ScalesSVG';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FormulasListModal = ({ visible, onClose }) => {
    const isEmpty = true

    useEffect(() => {
        const fetchStorage = async () => {
            const data = await AsyncStorage.getItem('key')
            console.log(data);
        }

        fetchStorage().catch(console.error)
    })

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                onClose();
            }}
        >

            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalTitle}>
                        <Text style={styles.modalTitleText}>Выбрать из готовых</Text>
                        <Pressable
                            style={[styles.buttonClose]}
                            onPress={onClose}>
                            <CrossSignSVG stroke='#fff' />
                        </Pressable>
                    </View>

                {
                    isEmpty 
                    ? <View style={styles.emptyMainContainer}>
                        <ScalesSVG />
                        <Text style={styles.emptyMainContainer__text}>Вы еще не создали ни одной формулы</Text>
                    </View>
                    : <View style={styles.mainContainer}></View>
                }
                </View>
            </View>
        </Modal>
    );
}

export default FormulasListModal;
