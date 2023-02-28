import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";

const ContactScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{ margin: 20 }}>
                <Card.Title>Contact Information</Card.Title>
                <Card.Divider />
                <Text>123 Main Street</Text>
                <Text style ={{ marginBottom: 10 }}>Bloomfield Hills, MI 48302</Text>
                <Text>Phone: 1-555-555-1234</Text>
                <Text>Email: rescue@rescue.com</Text>
            </Card>
        </ScrollView>
    );
};

export default ContactScreen;
