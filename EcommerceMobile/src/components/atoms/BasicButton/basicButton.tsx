import React from "react";
import { Button } from "react-native";

type PropsBasicButton = {
    label: string;
    onPressHandler: () => void;
}

const BasicButton = ({ label, onPressHandler }: PropsBasicButton) => {
    return (
        <Button
            title={label}
            onPress={() => onPressHandler()}
        />
    );
}

export default BasicButton;