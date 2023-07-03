import { View } from "react-native";
import styles from './aboutScreen.css'
import AboutScreenLogo from "../../components/SVG/AboutScreenLogo";

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <AboutScreenLogo />
        </View>
    );
}

export default AboutScreen;
