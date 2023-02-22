import { FlatList } from "react-native";
import { Tile } from "react-native-elements";

const AnimalTypesScreen = (props) => {
    const {animalTypes} = props;

    const renderAnimalItem = ({ item: animal }) => {
        return (
            <Tile
                title={'Available ' + animal.animalType}
                imageSrc={animal.image}
                onPress={() => props.onPress('animal.animalIndex')}
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
