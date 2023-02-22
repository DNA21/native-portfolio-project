import { View, Platform } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import AvailableAnimals from './AvailableAnimals';
import AnimalInfoScreen from './AnimalInfoScreen';
import AnimalTypesScreen from './AnimalTypesScreen';

const AnimalNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Available Animals'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#5637DD'
                },
                headerTintColor: '#fff'
            }}
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
            <AnimalNavigator />
        </View>
    );
};

export default Main;
