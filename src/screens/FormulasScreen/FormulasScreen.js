import { ScrollView, Text, View } from "react-native";

import styles from '../styles.css'
import BackgroundSVG from "../../components/SVG/BackgroundSVG";
import ScalesSVG from "../../components/SVG/ScalesSVG";

const FormulasScreen = () => {
    const isEmpty = true;

    return (
        <ScrollView style={styles.scrollView} keyboardDismissMode='on-drag'>
            <BackgroundSVG style={styles.backgroundImage} />

            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Формулы</Text>
                </View>
            </View>

            <View style={isEmpty ? [styles.emptyMainContainer, styles.mainContainer] : styles.mainContainer}>
                <ScalesSVG />
                <Text style={styles.formulasEmptyText}>Вы еще не создали ни одной формулы</Text>
            </View>
        </ScrollView>
    );
}

export default FormulasScreen;
