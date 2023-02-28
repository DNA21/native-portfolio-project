import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";

const Mission = () => {
    return (
        <Card>
            <Card.Title>Our Mission</Card.Title>
            <Card.Divider />
            <Text style={{ margin: 10 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan viverra orci, non egestas purus malesuada sed. Donec vitae eros in ipsum luctus tempus vitae vitae massa. Mauris nec blandit ipsum. Vivamus ut accumsan velit, dignissim sagittis erat. Vivamus tortor metus, sagittis nec dapibus et, auctor consequat velit. Donec placerat elit vel placerat sodales. Aliquam eu lectus tincidunt, dictum velit a, pharetra risus. Vivamus in mi eu leo tincidunt suscipit id in enim.
            </Text>
        </Card>
    )
};

const AboutScreen = () => {
    return (
        <ScrollView>
            <Mission />
        </ScrollView>
    )
};

export default AboutScreen;
