import { Text, View } from "react-native";
import { Card } from "react-native-elements";

const RenderAnimals = ({ animal }) => {
    if (animal) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={animal.image} style={{ height: 300 }}>
                    <View style={{ justifyContent: 'flex-end', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {animal.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{animal.background}</Text>
            </Card>
        );
    }
    return <View />;
};

export default RenderAnimals;
