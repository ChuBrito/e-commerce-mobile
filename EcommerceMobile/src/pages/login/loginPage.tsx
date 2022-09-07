import React, { FunctionComponent, useState } from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BasePage from "../../components/templates/basePageTemplate/basepage";
import LoginLogo from "../../components/atoms/LoginLogo/loginLogo";
import InputField from "../../components/atoms/InputField/inputField";
import BasicButton from "../../components/atoms/BasicButton/basicButton";
import TextField from "../../components/atoms/TextField/textField";
import { setUserLoggedIn } from "../../store/reducers/app.reducer";
import { RootState } from "../../store/store";
import { appConstants, loginPage } from "../../utils/pt-br";

const LoginPage: FunctionComponent = () => {
    const { app } = useSelector<any, RootState>((state) => state)
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setSetPassword] = useState('')

    const loginHandler = () => {
        console.log("tentando logar");
        dispatch(setUserLoggedIn(true))
    }

    const onChangeUser = (event: any) => {
        console.log(event);
        setUsername(event.target?.value)
    }
    const onChangePassword = (event: any) => {
        console.log(event);
        setSetPassword(event.target?.value)
    }

    return (
        <BasePage>
            <View style={{ flex: 2, alignItems: 'center', justifyContent: "center" }}>
                <LoginLogo />
                <View style={{ backgroundColor: 'blue' }}>
                    <TextField value={appConstants.appNameTitle} size={20}></TextField>
                </View>
            </View>
            <KeyboardAvoidingView style={{ flex: 1, paddingHorizontal: 16 }}>
                <InputField
                    value={username}
                    label={loginPage.usernameLabel}
                    placeholder={loginPage.usernamePlaceholder}
                    onChangeHandler={onChangeUser}
                />
                <InputField
                    value={password}
                    label={loginPage.passwordLabel}
                    placeholder={loginPage.passwordPlaceholder}
                    onChangeHandler={onChangePassword}
                />
                <BasicButton label={"Login"} onPressHandler={loginHandler} />
                <View  style={{flex: 1, justifyContent:`flex-end`, marginBottom: 10}}>
                    <TextField value={`Versão: ${app.version}`} position={'right'} />
                </View>
            </KeyboardAvoidingView>
        </BasePage>
    )
}

export default LoginPage;