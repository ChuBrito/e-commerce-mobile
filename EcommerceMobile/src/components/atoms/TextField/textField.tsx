import React from 'react';
import { ColorValue, StyleProp, Text, TextStyle } from 'react-native';

type PropsTextField = {
    value: string;
    size?: number;
    textColor?: ColorValue;
    position?: 'right' | 'left' | 'center';
};

const TextField = ({ value = '', textColor = 'black', position = 'left', size = 10 }: PropsTextField) => {
    return (
        <Text
            style={{
                textAlign: position,
                fontSize: size,
                color: textColor,
            }}
        > {value}
        </Text >
    )
};

export default TextField;