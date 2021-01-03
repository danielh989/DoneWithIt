import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

import AppIcon from "./AppIcon";
import AppText from "./AppText";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <AppIcon
          name={item.iconName}
          backgroundColor={item.backgroundColor}
          size={60}
        ></AppIcon>
        <AppText style={styles.text}>{item.label}</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "33%",
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  text: {
    textAlign: "center",
    marginTop: 5,
  },
});

export default CategoryPickerItem;
