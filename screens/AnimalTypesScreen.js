import { FlatList } from "react-native";
import { Tile } from "react-native-elements";
import { useState } from "react";
import { ANIMALTYPES } from '../shared/ANIMALTYPES';

const AnimalTypesScreen = ({ navigation }) => {
    const [animalTypes, setAnimalTypes] = useState(ANIMALTYPES);

    const renderAnimalItem = ({ item: animal }) => {
        return (
            <Tile
                title={'Available ' + animal.animalType}
                imageSrc={animal.image}
                onPress={
                    () => {navigation.navigate('Animals', { animal })}
                }
                featured
            />
        )
    }

    return (
        <FlatList
            data={animalTypes}
            renderItem={renderAnimalItem}
            keyExtractor={(item) => item.animalIndex.toString()}
        />
    );
};

export default AnimalTypesScreen;
