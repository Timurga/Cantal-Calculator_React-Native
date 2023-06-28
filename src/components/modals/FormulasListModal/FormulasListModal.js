import React, { useEffect, useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';

import styles from './formulaListModal.css'
import CrossSignSVG from '../../SVG/CrossSignSVG';
import ScalesSVG from '../../SVG/ScalesSVG';
import { fetchStorage } from '../../../utils/fetchStorage';

const FormulasListModal = ({ visible, onClose }) => {
    const [isContainerEmpty, setIsContainerEmpty] = useState(true)
    const [containerContent, setContainerContent] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { containerContent, isContainerEmpty } = await fetchStorage();
            setContainerContent([...containerContent, containerContent]);
            setIsContainerEmpty(isContainerEmpty);
        };
        fetchData();
    });


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
                        isContainerEmpty
                            ? <View style={styles.emptyMainContainer}>
                                <ScalesSVG />
                                <Text style={styles.emptyMainContainer__text}>Вы еще не создали ни одной формулы</Text>
                            </View>
                            : <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                                <View style={styles.mainContainer}>
                                    {
                                        containerContent.map((item) => {
                                            if (typeof item.formulaName !== 'string' || typeof item.formulaName === 'undefined') {
                                                return null;
                                            } else {
                                                return (
                                                    <Pressable key={item.id} style={styles.formulaContainer}>
                                                        <Text style={styles.formulaContainer__title}>{null ? '' : item.formulaName}</Text>
                                                        <Text style={styles.formulaContainer__formula}>{item.formulaShow}</Text>
                                                    </Pressable>
                                                )
                                            }
                                        })
                                    }
                                </View>
                            </ScrollView>
                    }
                </View>
            </View>
        </Modal>
    );
}

export default FormulasListModal;
