import React from 'react';
import { Alert, Modal, Pressable, Text, View } from 'react-native';

import styles from './deleteConfirmModal.css'
import AsyncStorage from '@react-native-async-storage/async-storage';

const DeleteConfirmModal = ({ visible, onClose, id, name, formula }) => {

    const handleConfirm = async () => {
        onClose()

        try {
            await AsyncStorage.removeItem(`${id}`);

            Alert.alert('Удаление формулы', 'Успешно удалено', [
                { text: 'OK' },
            ]);

        } catch (e) {
            console.log(e)

            Alert.alert('Удаление формулы', 'Неудачно', [
                { text: 'OK' },
            ]);

        }
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
            <View style={styles.backgroundOpacity}>
                <View style={styles.modalView}>
                    <View style={styles.modalTitle}>
                        <Text style={styles.modalTitle__title}>Удаление формулы</Text>
                        <Text style={styles.modalTitle__subtitle}>Вы уверены что хотите удалить данную формулу?</Text>
                    </View>

                    <View style={styles.modalFormulaPreview}>
                        <Text>{name}</Text>
                        <Text style={{ fontSize: 12, marginTop: 5 }}>{formula}</Text>
                    </View>

                    <View style={styles.modalButtons}>
                        <Pressable style={styles.modalButtons__button} onPress={() => onClose()}>
                            <Text style={styles.modalButtons__button__text}>Отмена</Text>

                        </Pressable>

                        <Pressable style={[styles.modalButtons__button, { borderColor: '#198C4F', backgroundColor: '#198C4F' }]} onPress={handleConfirm}>
                            <Text style={[styles.modalButtons__button__text, { color: '#ffffff' }]}>Удалить</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default DeleteConfirmModal;
