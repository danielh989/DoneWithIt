import React from "react";
import * as Yup from "yup";

import { AppFormField, AppForm, SubmitButton } from "../components/Forms";
import Screen from "../components/Screen";

function RegisterScreen(props) {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    name: Yup.string().required().min(1).label("Name"),
    password: Yup.string().required().min(4).label("Password"),
  });
  return (
    <Screen>
      <AppForm
        initialValues={{ email: "", password: "", name: "" }}
        onSubmit={(values) => console.log({ values })}
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
