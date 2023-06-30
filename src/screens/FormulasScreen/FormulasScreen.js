import { ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchStorage } from "../../utils/fetchStorage";

import styles from './formulasScreen.css'
import BackgroundSVG from "../../components/SVG/BackgroundSVG";
import ScalesSVG from "../../components/SVG/ScalesSVG";
import FormulaSelectDelete from "../../components/modals/FormulaSelectDelete/FormulaSelectDelete";
import DeleteConfirmModal from "../../components/modals/deleteConfirmModal/DeleteConfirmModal";
import FormulaListItem from "../../components/UI/formulaListItem/FormulaListItem";

const FormulasScreen = () => {
    const [isContainerEmpty, setIsContainerEmpty] = useState(true)
    const [containerContent, setContainerContent] = useState([])
    const [deleteConfirmModal, setDeleteConfirmModal] = useState(null)
    const [modalData, setModalData] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            const fetchData = async () => {
                const { containerContent, isContainerEmpty } = await fetchStorage();
                setContainerContent(containerContent);
                setIsContainerEmpty(isContainerEmpty);
            };

            fetchData()
        }, 1500)
    }, [modalData])

    const searchItemInStorage = async (id) => {
        const data = await AsyncStorage.getItem(`${id}`)
        setModalData(JSON.parse(data))
    }

    const handleDelete = (id) => {
        setDeleteConfirmModal(id)
        searchItemInStorage(id)
    }

    const onCloseDeleteConfirmModal = () => {
        setDeleteConfirmModal(null)
        setModalData({})
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
                                containerContent.map((item, index) => {
                                    if (typeof item.formulaName !== 'string') {
                                        return
                                    } else {
                                        return (
                                            <>
                                                <FormulaListItem
                                                    key={item.id}
                                                    id={item.id}
                                                    name={item.formulaName}
                                                    formula={item.formulaShow}
                                                    pressable={false}
                                                    children={<FormulaSelectDelete key={index} deleteItem={(id) => handleDelete(id)} id={item.id} />}
                                                />
                                                {deleteConfirmModal && (
                                                    <DeleteConfirmModal
                                                        key={index}
                                                        visible={true}
                                                        onClose={onCloseDeleteConfirmModal}
                                                        id={modalData?.id}
                                                        name={modalData?.formulaName}
                                                        formula={modalData?.formulaShow}
                                                    />
                                                )}

                                            </>
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