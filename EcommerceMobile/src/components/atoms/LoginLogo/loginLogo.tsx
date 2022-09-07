import React, { FunctionComponent, ReactNode } from "react";
import { Image, View } from "react-native";

const loginLogo = require('../../../assets/images/CartLogo.png')

const LoginLogo: FunctionComponent = () => {
    return (
        <View style={{
            overflow: 'hidden',
            backgroundColor: 'blue',
            maxHeight: 300,
            maxWidth: 300,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 180
        }}>
            <Image source={loginLogo} resizeMode="center" />
        </View>
    );
}


export default LoginLogo;