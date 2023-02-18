import { useState } from 'react';
import { View } from 'react-native';
import { ANIMALS } from '../shared/ANIMALS';
import AvailableDogs from './AvailableDogs';
import AnimalInfoScreen from './AnimalInfoScreen';

const Main = () => {
    const [animals, setAnimals] = useState(ANIMALS);
    const [selectedAnimalId, setSelectedAnimalId] = useState();

    return (
        <View style={{ flex: 1 }}>
            <AvailableDogs
                animals={animals}
                onPress={(animalId) => setSelectedAnimalId(animalId)}
            />
            <AnimalInfoScreen
                animal={
                    animals.filter(
                        (animal) => animal.id === selectedAnimalId
                    )[0]
                }
            />
        </View>
    );
};

export default Main;
