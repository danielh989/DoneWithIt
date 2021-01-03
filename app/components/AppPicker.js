import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import params from "../config/params";
import AppText from "./AppText";
import AppButton from "../components/AppButton";
import CategoryPickerItem from "./CategoryPickerItem";
import AppPickerItem from "./AppPickerItem";

function AppPicker({
  iconName,
  items,
  color: iconColor = "black",
  placeholder = "Category",
  selectedItem,
  numColumns = 1,
  PickerItemComponent = AppPickerItem,
  width,
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
        <View style={[styles.container, { width }]}>
          {iconName && (
            <MaterialCommunityIcons
              color={iconColor}
              name={iconName}
              style={styles.icon}
              size={20}
            ></MaterialCommunityIcons>
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

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
            keyExtractor={(item) => item.value.toString()}
            numColumns={numColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectedItem(item);
                }}
                label={item.label}
              ></PickerItemComponent>
            )}
          ></FlatList>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: params.colors.lightgrey,
    borderRadius: 10,
    height: 45,
    flexDirection: "row",
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  modal: {
    padding: 10,
  },
  placeholder: {
    flex: 1,
    color: "grey",
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
