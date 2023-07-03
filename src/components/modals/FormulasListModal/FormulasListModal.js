import React, { useEffect, useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';

import styles from './formulaListModal.css'
import CrossSignSVG from '../../SVG/CrossSignSVG';
import ScalesSVG from '../../SVG/ScalesSVG';
import { fetchStorage } from '../../../utils/fetchStorage';
import FormulaListItem from '../../UI/formulaListItem/FormulaListItem';

const FormulasListModal = ({ visible, onClose, onChoose }) => {
    const [isContainerEmpty, setIsContainerEmpty] = useState(true)
    const [containerContent, setContainerContent] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { containerContent, isContainerEmpty } = await fetchStorage()
            setContainerContent([...containerContent, containerContent])
            setIsContainerEmpty(isContainerEmpty)
        };
        
        fetchData()

        const interval = setInterval(fetchData, 1500)

        return () => clearInterval(interval)
    }, []);

    const handleChoose = (id, name, formula, calc) => {
        onChoose(id, name, formula, calc)
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
                        <Text style={styles.modalTitleText}>Выбрать из готовых</Text>
                        <Pressable
                            style={styles.buttonClose}
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
                                            if (typeof item.formulaName !== 'string') {
                                                return null;
                                            } else {
                                                return (
                                                    <FormulaListItem
                                                        key={item.id}
                                                        id={item.id}
                                                        name={item.formulaName}
                                                        formula={item.formulaShow}
                                                        pressable={true}
                                                        onPress={() => handleChoose(item.id, item.formulaName, item.formulaShow, item.formulaCalculation)}
                                                    />
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
