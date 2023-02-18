import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const AvailableDogs = (props) => {
    const renderAnimalItem = ({ item: animal }) => {
        return (
            <ListItem onPress={() => props.onPress(animal.id)}>
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
            data={props.animals}
            renderItem={renderAnimalItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default AvailableDogs;
