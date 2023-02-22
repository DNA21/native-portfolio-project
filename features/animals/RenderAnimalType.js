import { Text, View } from "react-native";
import { Card, ListItem, Avatar } from "react-native-elements";

const RenderAnimalType = (props) => {
    const { animalType, animals } = props;

    const renderAnimalItem = ({ item: animalType }) => {
        return (
            <ListItem
                onPress={() => animalType.onPress(animalType.animalIndex)}
            >
                <Avatar source={props.animal.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{props.animal.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {props.animal.background}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };

    if (animalType) {
        return (
            <FlatList
                data={animals}
                renderItem={renderAnimalItem}
                keyExtractor={(item) => item.animalIndex.toString()}
            />
        );
    }
    return <View />;
};

export default RenderAnimalType;
