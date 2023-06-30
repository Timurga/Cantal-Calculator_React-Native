import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View, Text, Alert } from "react-native";

import styles from '../styles.css';
import BackgroundSVG from '../../components/SVG/BackgroundSVG';
import BurgerMenuSVG from '../../components/SVG/BurgerMenuSVG';
import PlusSVG from '../../components/SVG/PlusSVG';
import FormulaCreate from '../../components/modals/FormulaCreateModal/FormulaCreateModal';
import FormulasListModal from '../../components/modals/FormulasListModal/FormulasListModal';
import FormulaListItem from '../../components/UI/formulaListItem/FormulaListItem';
import ItemRemoveButton from '../../components/UI/itemRemoveButton/ItemRemoveButton';
import FormulaSelectButton from '../../components/UI/formulaSelectButton/FormulaSelectButton';
import InputUI from '../../components/UI/input/InputUI';
import RadioButtonUI from '../../components/UI/radioButton/RadioButtonUI';


const CalculatingScreen = () => {
    const [priceWithoutNDS, setPriceWithoutNDS] = useState()
    const [fat, setFat] = useState()
    const [protein, setProtein] = useState()
    const [type, setType] = useState(false)
    const [selectedFormulas, setSelectedFormulas] = useState([])
    const [calculatedFormulas, setCalculatedFormulas] = useState([])
    const [createModalVisible, setCreateModalVisible] = useState(false)
    const [listModalVisible, setListModalVisible] = useState(false)

    const onCloseCreateModal = () => {
        setCreateModalVisible(false)
    }

    const onCloseListModal = () => {
        setListModalVisible(false)
    }

    const handleChooseFormula = (id, name, formula, calc) => {
        const selectedFormula = { id: id, name: name, formula: formula, calc: calc }

        if (selectedFormulas.some(item => item.id === selectedFormula.id)) {
            Alert.alert('Добавление формулы', 'Нельзя использовать одну формулу несколько раз', [
                { text: 'OK' },
            ]);
            return
        }

        setSelectedFormulas([...selectedFormulas, selectedFormula])
        setListModalVisible(false)
    }

    const handleRemoveItemFromList = (id) => {
        if (selectedFormulas.length === 1) {
            setSelectedFormulas([])
            setCalculatedFormulas([])
            return
        }

        if(calculatedFormulas.length !== 0) {
            const editCalc = calculatedFormulas.filter(item => item.id !== id)
            setCalculatedFormulas(editCalc)
        }
        const editArray = selectedFormulas.filter(item => item.id !== id)
        setSelectedFormulas(editArray)
    }

    const handleCalculate = (protein, sort, baseValue, fat) => {
        try {
            if (!protein || !baseValue || !fat) {
                Alert.alert('Расчет формул', 'Введите все значения', [
                    { text: 'OK' },
                ]);
                return
            }

            if (selectedFormulas.length === 0) {
                Alert.alert('Расчет формул', 'Нужно выбрать хотя бы одну формулу', [
                    { text: 'OK' },
                ]);
                return
            }

            let updatedSort = sort ? 1.1 : 1;
            const calculatedResults = []

            selectedFormulas.forEach((item) => {
                if (calculatedFormulas.length !== 0) {
                    for (let num in calculatedFormulas) {
                        if (item.id === selectedFormulas[num].id) {
                            return
                        }
                    }
                }

                const sum = new Function('protein', 'sort', 'fat', 'baseValue', `return ${item.calc}`)

                calculatedResults.push({ sum: sum(protein, updatedSort, fat, baseValue), name: item.name, id: item.id })
            })
            setCalculatedFormulas([...calculatedFormulas, ...calculatedResults])
        } catch (e) {
            console.error('Ошибка при преобразовании формулы: ', e)
        }

    }

    return (
        <ScrollView style={styles.scrollView} keyboardDismissMode='on-drag'>
            <FormulaCreate visible={createModalVisible} onClose={onCloseCreateModal} />
            <FormulasListModal visible={listModalVisible} onClose={onCloseListModal} onChoose={(id, name, formula, calc) => handleChooseFormula(id, name, formula, calc)} />
            <BackgroundSVG style={styles.backgroundImage} />
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Расчёт</Text>
                    <Text style={styles.subtitleText}>Стоимость 1 литра молока включая НДС</Text>
                </View>

                {
                    calculatedFormulas.length === []
                        ? <View></View>
                        : <View style={styles.calculatedFormulasContainer}>
                            {calculatedFormulas.map(item => {
                                return (
                                    <View key={item.id} style={styles.calculatedFormulasItem}>
                                        <Text style={styles.calculatedFormulasItem__text}>{item.name}</Text>
                                        <Text style={[styles.calculatedFormulasItem__text, { fontWeight: 600 }]}>{`${item.sum.toFixed(2)} ₽`}</Text>
                                    </View>
                                )
                            })}
                        </View>
                }
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.inputsRowContainer}>
                        <InputUI affix='₽' value={priceWithoutNDS} setValue={setPriceWithoutNDS}>Базовая цена без НДС</InputUI>
                        <RadioButtonUI value={type} setValue={setType}>Сорт</RadioButtonUI>
                    </View>

                    <View style={styles.inputsRowContainer}>
                        <InputUI affix='%' value={fat} setValue={setFat}>Жирность</InputUI>
                        <InputUI affix='%' value={protein} setValue={setProtein}>Белок</InputUI>
                    </View>

                    <Text style={styles.formulaListText}>Формула для расчета</Text>

                    {selectedFormulas === []
                        ? <View></View>
                        : <View>
                            {selectedFormulas.map((item, index) => {
                                return (
                                    <FormulaListItem
                                        key={index}
                                        id={item.id}
                                        name={item.name}
                                        formula={item.formula}
                                        pressable={false}
                                        children={<ItemRemoveButton onPress={() => handleRemoveItemFromList(item.id)} />}
                                    />
                                )
                            })}
                        </View>

                    }

                    <View style={selectedFormulas.length === 0 ? styles.formulaSelectContainer : styles.formulaSelectContainer__filledList}>
                        <FormulaSelectButton
                            onPress={() => setListModalVisible(!listModalVisible)}
                            SVG={<BurgerMenuSVG />}
                            listFilled={selectedFormulas.length === 0 ? true : false}
                        >
                            {selectedFormulas.length === 0
                                ? 'Выбрать                из готовых'
                                : 'Добавить еще'
                            }

                        </FormulaSelectButton>

                        {selectedFormulas.length === 0
                            ? <View style={styles.separator}></View>
                            : <View></View>
                        }


                        <FormulaSelectButton
                            onPress={() => setCreateModalVisible(!createModalVisible)}
                            SVG={<PlusSVG />}
                            listFilled={selectedFormulas.length === 0 ? true : false}
                        >
                            {selectedFormulas.length === 0
                                ? 'Создать новую'
                                : 'Создать'
                            }
                        </FormulaSelectButton>
                    </View>

                    <TouchableOpacity activeOpacity={0.8} style={styles.calculateButton} onPress={() => handleCalculate(protein, type, priceWithoutNDS, fat)}>
                        <Text style={styles.buttonText}>Рассчитать</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default CalculatingScreen;
