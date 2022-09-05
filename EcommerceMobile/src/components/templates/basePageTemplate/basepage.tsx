import React, { FunctionComponent, ReactNode } from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";

type Props = {
    children: ReactNode
}

const BasePage: FunctionComponent<Props> = ({ children }) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            {children}
        </SafeAreaView>
    );
}


export default BasePage;