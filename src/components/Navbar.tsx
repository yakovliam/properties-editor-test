import { Flex, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex w={"100%"} boxShadow={"md"} p={4}>
      <Heading size={"md"} fontWeight={500}>
        Tarigma Language Editor
      </Heading>
    </Flex>
  );
};

export default Navbar;
