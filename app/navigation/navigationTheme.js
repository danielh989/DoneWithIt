import { DefaultTheme } from "@react-navigation/native";

import params from "../config/params";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: params.colors.primary,
    background: params.colors.white,
  },
};
