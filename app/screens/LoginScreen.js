import React from "react";

import { Formik } from "formik";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

function LoginScreen(props) {
  return (
    <Screen>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log({ values })}
      >
        {({ handleChange, handleSubmit }) => {
          return (
            <>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                handleChange="email"
                iconName="email"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                placeholder="Email"
                textContentType="emailAddress"
              />
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                iconName="lock"
                onChangeText={handleChange("password")}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />
              <AppButton onPress={handleSubmit} title="Login" />
            </>
          );
        }}
      </Formik>
    </Screen>
  );
}

export default LoginScreen;
