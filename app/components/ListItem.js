import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import params from "../config/params";
import AppText from "./AppText";
import ListItemActions from "./ListItemActions";

function ListItem({
  title,
  subtitle,
  ImageComponent,
  image,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={params.colors.lightgrey}
        onPress={onPress}
      >
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.textContainer}>
            <AppText style={styles.title} numberOfLines={2}>
              {title}
            </AppText>
            {subtitle && (
              <AppText numberOfLines={1} style={styles.subtitle}>
                {subtitle}{" "}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons size={25} name="chevron-right" />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  image: { height: 60, width: 60, borderRadius: 30 },
  textContainer: { marginLeft: 15, justifyContent: "center", flex: 1 },
  title: { fontSize: params.fontSizes.medium },
  subtitle: { color: params.colors.grey },
});

export default ListItem;
