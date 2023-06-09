import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View, Text } from "react-native";

import styles from '../styles.css';
import BackgroundSVG from '../../components/SVG/BackgroundSVG';
import CalculatingScreenInput from './CalculatingScreenInput';
import CalculatingScreenRadio from './CalculatingScreenRadio';
import BurgerMenuSVG from '../../components/SVG/BurgerMenuSVG';
import PlusSVG from '../../components/SVG/PlusSVG';
import CalculatingScreenFormulaSelect from './CalculatingScreenFormulaSelect';
import FormulaCreate from '../../components/modals/FormulaCreate/FormulaCreate';


const CalculatingScreen = () => {
    const [priceWithoutNDS, setPriceWithoutNDS] = useState();
    const [fat, setFat] = useState();
    const [protein, setProtein] = useState();
    const [type, setType] = useState(false);
    const [modalVisible, setModalVisible] = useState(false)
    const onClose = () => {
        setModalVisible(false)
    }

    return (
        <ScrollView style={styles.scrollView} keyboardDismissMode='on-drag'>
            <FormulaCreate visible={modalVisible} onClose={onClose}/>
            <BackgroundSVG style={styles.backgroundImage} />
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Расчёт</Text>
                    <Text style={styles.subtitleText}>Стоимость 1 литра молока включая НДС</Text>
                </View>
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.inputsRowContainer}>
                        <CalculatingScreenInput affix='₽' value={priceWithoutNDS} setValue={setPriceWithoutNDS}>Базовая цена без НДС</CalculatingScreenInput>
                        <CalculatingScreenRadio value={type} setValue={setType}>Сорт</CalculatingScreenRadio>
                    </View>

                    <View style={styles.inputsRowContainer}>
                        <CalculatingScreenInput affix='%' value={fat} setValue={setFat}>Жирность</CalculatingScreenInput>
                        <CalculatingScreenInput affix='%' value={protein} setValue={setProtein}>Белок</CalculatingScreenInput>
                    </View>

                    <View style={styles.formulaSelectContainer}>
                        <CalculatingScreenFormulaSelect
                            SVG={<BurgerMenuSVG style={styles.formulaSelectIcon} />}
                        >
                            Выбрать                из готовых
                        </CalculatingScreenFormulaSelect>

                        <View style={styles.separator}></View>

                        <CalculatingScreenFormulaSelect
                            onPress={() => setModalVisible(!modalVisible)}
                            SVG={<PlusSVG style={styles.formulaSelectIcon} />}
                        >
                            Создать новую
                        </CalculatingScreenFormulaSelect>
                    </View>

                    <TouchableOpacity activeOpacity={0.8} style={styles.calculateButton}>
                        <Text style={styles.buttonText}>Рассчитать</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default CalculatingScreen;
