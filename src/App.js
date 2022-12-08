

import GlobalStyles from "./styles/Globalstyles";
import Rutas from "./routes/Rutas";
import { ContextProvider } from './components/Context';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
    <ContextProvider>
    <ChakraProvider>
    <Rutas/>
    <GlobalStyles/>
    </ChakraProvider>
    </ContextProvider>
    </>
  );
}

export default App;
