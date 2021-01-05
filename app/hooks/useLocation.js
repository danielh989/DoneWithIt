import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  try {
    const [location, setLocation] = useState();
    const getUserLocation = async () => {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    };

    useEffect(() => {
      getUserLocation();
    }, []);
    return location;
  } catch (error) {
    console.log(error);
  }
};
