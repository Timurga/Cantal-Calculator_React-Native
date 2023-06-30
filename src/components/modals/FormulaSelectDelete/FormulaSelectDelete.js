import React, { useState } from 'react';
import styles from './formulaSelectDelete.css'
import { Pressable, Text, TouchableHighlight, View } from 'react-native';
import DotsSVG from '../../SVG/DotsSVG';

const FormulaSelectDelete = ({ deleteItem, id }) => {
    const [showModal, setShowModal] = useState(false)

    const handleDelete = () => {
        setShowModal(false)
        deleteItem(id)
    }

    return (
        <>
            <Pressable onPress={() => setShowModal(showModal ? false : true)} style={styles.selectButton}>
                <DotsSVG />
            </Pressable>
            {showModal && (
                <View style={styles.selectContainer}>
                    <TouchableHighlight style={styles.deleteButton} underlayColor='#d9d9d9' onPress={() => handleDelete()}>
                        <Text>Удалить</Text>
                    </TouchableHighlight>
                </View>
            )}
        </>
    );
}

export default FormulaSelectDelete;
