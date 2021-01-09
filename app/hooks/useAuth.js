import { useContext } from "react";

import AuthContext from "../auth/context";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  return { user, setUser };
};
