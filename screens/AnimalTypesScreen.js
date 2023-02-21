import { FlatList } from "react-native";
import { Tile } from "react-native-elements";
import { ANIMALTYPES } from "../shared/ANIMALTYPES";

const AnimalTypesScreen = () => {
    const animalTypes = ANIMALTYPES;

    const renderAnimalItem = ({ item: animal }) => {
        return (
            <Tile
                title={'Available ' + animal.animalType}
                imageSrc={animal.image}
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
