import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import AppFormField from "../components/AppFormField";

function LoginScreen(props) {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });
  return (
    <Screen>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log({ values })}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => {
          return (
            <>
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
              <AppButton onPress={handleSubmit} title="Login" />
            </>
          );
        }}
      </Formik>
    </Screen>
  );
}

export default LoginScreen;
