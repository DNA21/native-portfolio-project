import RenderAnimals from '../features/animals/RenderAnimals';

const AnimalInfoScreen = ({ route }) => {
    const { animal } = route.params;
    return <RenderAnimals animal={animal} />;
};

export default AnimalInfoScreen;
