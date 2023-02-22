import { View, Platform } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AvailableAnimals from './AvailableAnimals';
import AnimalInfoScreen from './AnimalInfoScreen';
import AnimalTypesScreen from './AnimalTypesScreen';
import HomeScreen from './HomeScreen';

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#5637DD' }
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{title: 'Home'}}
            />
        </Stack.Navigator>
    )
}

const AnimalNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Available Animals'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='AnimalType'
                component={AnimalTypesScreen}
                options={{ title: 'Animal Type' }}
            />
            <Stack.Screen
                name='Animals'
                component={AvailableAnimals}
                options={({ route }) => ({
                    title: 'Available ' + route.params.animal.animalType
                })}
            />
            <Stack.Screen
                name='AnimalInfo'
                component={AnimalInfoScreen}
                options={({ route}) => ({
                    title: route.params.animal.name
                })}
            />
        </Stack.Navigator>
    )
}

const Main = () => {

    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS ==='ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <Drawer.Navigator
                initialRouteName='Home'
                drawerStyle={{ backgroundColor: '#CEC8FF' }}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{ title: 'Home' }}
                />
                <Drawer.Screen
                    name='AvailableAnimals'
                    component={AnimalNavigator}
                    options={{ title: 'Available Animals' }}
                />
            </Drawer.Navigator>
        </View>
    );
};

export default Main;
