import React from "react";
import * as Yup from "yup";

import { AppFormField, AppForm, SubmitButton } from "../components/Forms";
import Screen from "../components/Screen";

function LoginScreen(props) {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });
  return (
    <Screen>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log({ values })}
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
