import { Text, View, FlatList } from "react-native";
import { Card } from "react-native-elements";
import { useState } from "react";
import { ANIMALS } from "../shared/ANIMALS";

const FeaturedItem = ({ item }) => {
    if(item) {
        return(
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={item.image}>
                    <View
                        style={{
                            justifyContent: 'flex-end',
                            flex: 1
                        }}
                    >
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
                            {item.name}
                        </Text>
                    </View>
                </Card.Image>
            </Card>
        )
    }
    return <View />;
}

const HomeScreen = () => {
    const [animals, setAnimals] = useState(ANIMALS);

    const featAnimals = animals.filter((item) => item.featured);

    return (
        <FlatList
            data={featAnimals}
            renderItem={FeaturedItem}
            keyExtractor={(item)=> item.id.toString()}
        />
    );
};

export default HomeScreen;
