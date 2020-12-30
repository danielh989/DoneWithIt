import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { fontSizes, colors } from "../config/params";
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
      <TouchableHighlight underlayColor={colors.lightgrey} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
  },
  image: { height: 60, width: 60, borderRadius: 30 },
  textContainer: { marginLeft: 15, justifyContent: "center" },
  title: { fontSize: fontSizes.medium },
  subtitle: { color: colors.grey },
});

export default ListItem;
