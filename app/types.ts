import { ImageSourcePropType } from "react-native";

export interface AppIconProps {
  backgroundColor: string;
  name: string;
}

export interface MessageProps {
  id: number;
  description?: string;
  title?: string;
}
export interface ListItemProps {
  image?: ImageSourcePropType;
  ImageComponent?: object;
  onPress?: any;
  renderRightActions?: any;
  subtitle?: string;
  title: string;
}

export interface ListItemProps {
  icon?: AppIconProps;
  targetScreen?: string;
  title: string;
}
export interface ScreenProps {
  children?: object;
  style?: object;
}
