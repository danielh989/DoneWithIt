import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
// @ts-ignore
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// @ts-ignore
import params from "../config/params";
// @ts-ignore
import AppText from "./AppText";
import { ListItemProps } from "../types";

function ListItem(props: ListItemProps) {
  return (
    <Swipeable renderRightActions={props.renderRightActions}>
      <TouchableHighlight
        underlayColor={params.colors.lightgrey}
        onPress={props.onPress}
      >
        <View style={styles.container}>
          {props.ImageComponent}
          {props.image && <Image style={styles.image} source={props.image} />}
          <View style={styles.textContainer}>
            <AppText style={styles.title} numberOfLines={2}>
              {props.title}
            </AppText>
            {props.subtitle && (
              <AppText numberOfLines={1} style={styles.subtitle}>
                {props.subtitle}{" "}
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
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
  },
  image: { height: 60, width: 60, borderRadius: 30 },
  textContainer: { marginLeft: 15, justifyContent: "center", flex: 1 },
  title: { fontSize: params.fontSizes.medium },
  subtitle: { color: params.colors.grey },
});

export default ListItem;
