import React from "react";
import { View, StyleSheet, Keyboard, Alert } from "react-native";
import { AppForm, AppFormField, SubmitButton } from "./Forms";
import sendNotification from "../notif/notifications";

import messagesApi from "../api/messages";
function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();
    //console.log(listing.id);

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message");
    }

    resetForm();

    sendNotification("Awesome!", "Message recieved!");
  };

  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{
          message: "",
        }}
        onSubmit={handleSubmit}
      >
        <AppFormField
          placeholder="Message"
          name="message"
          width={"100%"}
        ></AppFormField>
        <SubmitButton title="Submit"></SubmitButton>
      </AppForm>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default ContactSellerForm;
