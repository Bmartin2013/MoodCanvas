import P5Sketch from "../../../sketches/P5Sketch";

export const draw = async (parameters) => {
    try {

        return <P5Sketch parameters={parameters} />;


    } catch (error) {
        console.error("Error while rendering sketch", error);
    }
};