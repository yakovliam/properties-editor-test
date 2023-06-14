import { Box, Divider, Flex, HStack, Heading, Stat } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import StaticPropertyEditorWindow from "./components/propertyeditor/StaticPropertyEditorWindow";
import EditablePropertyEditorWindow from "./components/propertyeditor/EditablePropertyEditorWindow";
import Footer from "./components/Footer";

function App() {
  return (
    <Flex height={"100vh"} direction={"column"}>
      <Navbar />
      <Flex flex={1} overflowY={"hidden"} pt={4} gap={4}>
        <StaticPropertyEditorWindow />
        <Divider orientation={"vertical"} />
        <EditablePropertyEditorWindow />
      </Flex>
      <Footer />
    </Flex>
  );
}

export default App;
