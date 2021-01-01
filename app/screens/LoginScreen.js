import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

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
        {({ handleChange, handleSubmit, errors }) => {
          return (
            <>
              <AppText style={{ color: "red" }}>{errors.email}</AppText>
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
              <AppText style={{ color: "red" }}>{errors.password}</AppText>
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
