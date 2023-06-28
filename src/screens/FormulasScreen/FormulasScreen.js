import { ScrollView, Text, View, Pressable, Button } from "react-native";

import styles from './formulasScreen.css'
import BackgroundSVG from "../../components/SVG/BackgroundSVG";
import ScalesSVG from "../../components/SVG/ScalesSVG";
import { useEffect, useState } from "react";
import { fetchStorage } from "../../utils/fetchStorage";
import FormulaSelectDelete from "../../components/modals/FormulaSelectDelete/FormulaSelectDelete";
import DeleteConfirmModal from "../../components/modals/deleteConfirmModal/DeleteConfirmModal";

const FormulasScreen = () => {
    const [isContainerEmpty, setIsContainerEmpty] = useState(true)
    const [containerContent, setContainerContent] = useState([])
    const [deleteConfirmModal, setDeleteConfirmModal] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const { containerContent, isContainerEmpty } = await fetchStorage();
            setContainerContent(containerContent);
            setIsContainerEmpty(isContainerEmpty);
        };
        fetchData()
    }, [containerContent]);

    const handleDelete = () => {
        setDeleteConfirmModal(true)
    }

    const onCloseDeleteConfirmModal = () => {
        setDeleteConfirmModal(false)
    }

    return (
        <ScrollView style={styles.scrollView} keyboardDismissMode='on-drag'>
            <BackgroundSVG style={styles.backgroundImage} />

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Расчёт</Text>
            </View>

            <View style={styles.centeredView}>
                {
                    isContainerEmpty
                        ? <View style={styles.emptyMainContainer}>
                            <ScalesSVG />
                            <Text style={styles.emptyMainContainer__text}>Вы еще не создали ни одной формулы</Text>
                        </View>
                        : <View>
                            {
                                containerContent.map((item) => {
                                    if (typeof item.formulaName !== 'string') {
                                        return
                                    } else {
                                        return (
                                            <Pressable key={item.id} style={styles.formulaContainer}>
                                                <Text style={styles.formulaContainer__title}>{item.formulaName}</Text>
                                                <Text style={styles.formulaContainer__formula}>{item.formulaShow}</Text>
                                                <FormulaSelectDelete deleteItem={() => handleDelete()} />
                                                <DeleteConfirmModal
                                                    visible={deleteConfirmModal}
                                                    onClose={onCloseDeleteConfirmModal}
                                                    id={item.id}
                                                    name={item.formulaName}
                                                    formula={item.formulaShow}
                                                />
                                            </Pressable>
                                        )
                                    }
                                })
                            }
                        </View>
                }
            </View>
        </ScrollView>
    );
}

export default FormulasScreen;
