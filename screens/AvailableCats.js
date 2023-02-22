import RenderAnimalType from "../features/animals/RenderAnimalType";

const AvailableCats = (props) => {
    return <RenderAnimalType animalType={props.animalType} animals={props.animals} />
};

export default AvailableCats;
