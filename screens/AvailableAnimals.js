import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { useState } from 'react';
import { ANIMALS } from '../shared/ANIMALS';

const AvailableAnimals = ({ navigation }) => {
    const [animals, setAnimals] = useState(ANIMALS);

    const renderAnimalItem = ({ item: animal }) => {
        return (
            <ListItem onPress={() => navigation.navigate('AnimalInfo', { animal })}>
                <Avatar source={animal.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{animal.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {animal.background}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };
    return (
        <FlatList
            data={animals}
            renderItem={renderAnimalItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default AvailableAnimals;
