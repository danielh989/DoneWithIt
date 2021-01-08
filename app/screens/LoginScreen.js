import React from "react";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import {
  ErrorMessage,
  AppFormField,
  AppForm,
  SubmitButton,
} from "../components/Forms";
import Screen from "../components/Screen";
import authApi from "../api/auth";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const [loginFailed, setLoginFailed] = useState(false);
  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return console.log(setLoginFailed(true));
    setLoginFailed(false);
    const user = jwtDecode(result.data);
    console.log(user);
  };
  return (
    <Screen>
      <ErrorMessage
        error="Invalid email and/or password"
        visible={loginFailed}
      ></ErrorMessage>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          iconName="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          iconName="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

export default LoginScreen;
