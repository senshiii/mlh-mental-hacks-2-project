import {
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import AppLink from "./AppLink";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <Flex
      width="100vw"
      height="10vh"
      p={2}
      px="10rem"
      justify="space-between"
      align="center"
    >
      <AppLink fontSize="lg" fontWeight="bold" href="/">
        Peacefullness
      </AppLink>
      <Flex>
        <AppLink
          href="/shop"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mr={7}
        >
          Shop
        </AppLink>
        <AppLink
          href="/support"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mr={7}
        >
          Support
        </AppLink>
        {isAuth ? (
          <Button
            variant="solid"
            fontWeight="normal"
            rightIcon={<FaUserCircle />}
            colorScheme="blue"
          >
            My Profile
          </Button>
        ) : (
          <>
            <AppLink href="/signup">
              <Button
                fontWeight="normal"
                rightIcon={<AiOutlineArrowRight />}
                variant="solid"
                colorScheme="blue"
              >
                Sign Up
              </Button>
            </AppLink>
            <Text
              display="flex"
              justifyContent="center"
              alignItems="center"
              mx={3}
            >
              Or
            </Text>
            <AppLink href="/signin">
              <Button variant="ghost" fontWeight="normal" colorScheme="blue">
                Sign In
              </Button>
            </AppLink>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
