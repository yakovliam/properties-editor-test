import { Button, Flex } from "@chakra-ui/react";
import { CgExport } from "react-icons/cg";

const Footer = () => {
  return (
    // top border
    <Flex w={"100%"} p={4} borderTopColor={"gray.200"} borderTopWidth={2}>
      <Flex flex={1} />
      <Button colorScheme={"blue"} size={"sm"} rightIcon={<CgExport />}>
        Export
      </Button>
    </Flex>
  );
};

export default Footer;
