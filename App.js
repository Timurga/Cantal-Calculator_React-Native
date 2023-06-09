import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import CalculatingScreen from './src/screens/CalculatingScreen/CalculatingScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import FormulasScreen from './src/screens/FormulasScreen/FormulasScreen';
import AboutScreen from './src/screens/AboutScreen';
import CalculatingTabSVG from './src/components/SVG/CalculatingTabSVG';
import FormulasTabSVG from './src/components/SVG/FormulasTabSVG';
import SettingsTabSVG from './src/components/SVG/SettingsTabSVG';
import AboutTabSVG from './src/components/SVG/AboutTabSVG';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='CalculatingScreen'
        activeColor='#0b4028'
        inactiveColor='#198C4F'
        shifting={true}
        barStyle={{ borderRadius: 10 }}
      >
        <Tab.Screen
          name="CalculatingScreen"
          component={CalculatingScreen}
          options={{
            tabBarLabel: 'Расчет',
            tabBarIcon: ({ color }) => (
              <CalculatingTabSVG stroke={color}/>
            )
          }}
        />

        <Tab.Screen
          name="FormulasScreen"
          component={FormulasScreen}
          options={{
            tabBarLabel: 'Формулы',
            tabBarIcon: ({ color }) => (
              <FormulasTabSVG stroke={color}/>
            )
          }}
        />

        <Tab.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Настройки',
            tabBarIcon: ({ color }) => (
              <SettingsTabSVG stroke={color}/>
            )
          }}
        />

        <Tab.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{
            tabBarLabel: 'Канталь',
            tabBarIcon: ({ color }) => (
              <AboutTabSVG stroke={color}/>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}