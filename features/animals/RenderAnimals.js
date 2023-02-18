import { Text, View } from "react-native";
import { Card } from "react-native-elements";

const RenderAnimals = ({ animal }) => {
    if (animal) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={animal.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
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
