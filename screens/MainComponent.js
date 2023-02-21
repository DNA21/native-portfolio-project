import { Platform, View } from 'react-native';
import { Constants } from 'expo-constants';
import AvailableDogs from './AvailableDogs';
import AnimalInfoScreen from './AnimalInfoScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { ANIMALS } from '../shared/ANIMALS';
import AnimalTypesScreen from './AnimalTypesScreen';

// const AnimalNavigator = () => {
//     const Stack = createStackNavigator();

//     return (
//         <Stack.Navigator
//             initialRouteName='Animals'
//             screenOptions={{
//                 headerStyle: {
//                     backgroundColor: 'red'
//                 },
//                 headerTintColor: '#fff'
//             }}
//         >
//             <Stack.Screen
//                 name='Animals'
//                 component={AvailableDogs}
//                 options={{ title: 'Available Dogs' }}
//             />
//             <Stack.Screen
//                 name='Dogs'

//         </Stack.Navigator>
//     )
// }

const Main = () => {
    const [animals, setAnimals] = useState(ANIMALS);
    const [selectedAnimalId, setSelectedAnimalId] = useState();

    return (
        <View style={{ flex: 1 }}>
            {/* <AvailableDogs
                animals={animals}
                onPress={(animalId) => setSelectedAnimalId(animalId)}
            />
            <AnimalInfoScreen
                animal={
                    animals.filter(
                        (animal) => animal.id === selectedAnimalId
                    )[0]
                }
            /> */}
            <AnimalTypesScreen />
        </View>
    );


};

export default Main;
