import React, { useState } from "react";
import * as Yup from "yup";

import {
  AppFormField,
  AppForm,
  SubmitButton,
  ErrorMessage,
} from "../components/Forms";
import Screen from "../components/Screen";
import authApi from "../api/auth";
import usersApi from "../api/users";
import useAuth from "../hooks/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  name: Yup.string().required().min(1).label("Name"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  const [error, setError] = useState();
  const auth = useAuth();

  const handleSubmit = async (userInfo) => {
    console.log(userInfo);
    const result = await usersApi.register(userInfo);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error ocurred");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await authApi.login(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };
  return (
    <Screen>
      <ErrorMessage error={error} visible={error} />
      <AppForm
        initialValues={{ email: "", password: "", name: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          iconName="account"
          name="name"
          placeholder="Name"
        />
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
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

export default RegisterScreen;
