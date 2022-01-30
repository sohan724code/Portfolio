import { useState } from "react";

const useTheme = () => {
  const [dark, setDark] = useState(false);
  return { dark, setDark };
};
export default useTheme;
