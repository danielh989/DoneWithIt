import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import AppPickerItem from "../components/AppPickerItem";
import AppButton from "../components/AppButton";
import params from "../config/params";
import { FlatList } from "react-native-gesture-handler";
function AppPicker({
  iconName = "email",
  items,
  color: iconColor = "black",
  placeholder = "Category",
  selectedItem,
  onSelectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.container}>
          {iconName && (
            <MaterialCommunityIcons
              color={iconColor}
              name={iconName}
              style={styles.icon}
              size={20}
            ></MaterialCommunityIcons>
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            color={iconColor}
            name="chevron-down"
            size={20}
          ></MaterialCommunityIcons>
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modal}>
          <AppButton onPress={() => setModalVisible(false)} title="Close" />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <AppPickerItem
                onPress={() => {
                  setModalVisible(false);
                  onSelectedItem(item);
                }}
                label={item.label}
              ></AppPickerItem>
            )}
          ></FlatList>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modal: {
    padding: 10,
  },
  container: {
    alignItems: "center",
    backgroundColor: params.colors.lightgrey,
    borderRadius: 10,
    height: 45,
    flexDirection: "row",
    paddingHorizontal: 15,
    margin: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
