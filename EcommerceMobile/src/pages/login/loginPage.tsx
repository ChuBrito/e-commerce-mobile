import React, { FunctionComponent } from "react";
import { Image, KeyboardAvoidingView, ScrollView, View } from "react-native";
import { Button, Text, TextInput } from "@react-native-material/core";
import BasePage from "../../components/templates/basePageTemplate/basepage";
import { useDispatch, useSelector } from "react-redux";
import { setUserLoggedIn } from "../../store/reducers/app.reducer";
import { RootState } from "../../store/store";

interface LoginPageProps {

}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
    const loginLogo = require('../../assets/images/CartLogo.png')
    const { app } = useSelector<any, RootState>((state) => state)
    const dispatch = useDispatch()

    const loginHandler = () => {
        console.log("tentando logar");
        dispatch(setUserLoggedIn(true))
    }

    return (
        <BasePage>
            <View style={{ flex: 2, alignItems: 'center', justifyContent: "center" }}>
                <View style={{
                    overflow: 'hidden', backgroundColor: 'blue', maxHeight: 300, maxWidth: 300, justifyContent: "center", alignItems: "center", borderRadius: 180
                }}>
                    <Image source={loginLogo} resizeMode="center" />
                </View>
                <View style={{ backgroundColor: 'blue' }}>
                    <Text style={{ fontSize: 20 }}> E-Cart Shop</Text>
                </View>
            </View>
            <KeyboardAvoidingView style={{ flex: 1, paddingHorizontal: 16 }}>
                <View >
                    <Text>Usuário</Text>
                    <TextInput placeholder="Digite seu usuário" />
                </View>
                <View >
                    <Text>Senha</Text>
                    <TextInput placeholder="Digite sua Senha" />
                </View>
                <Button title={"Login"} onPress={() => loginHandler} />
                <View>
                    <Text style={{ textAlign: 'right' }}> Version: {app.version}</Text>
                </View>
            </KeyboardAvoidingView>
        </BasePage>
    )
}

export default LoginPage;