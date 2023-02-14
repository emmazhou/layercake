import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";

import Layers from "./Layers";

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};
const theme = extendTheme({ config });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={"dark"} />
    <ChakraProvider theme={theme}>
      <Layers />
    </ChakraProvider>
  </React.StrictMode>
);
