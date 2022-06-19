import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Button,
  Link,
  Heading,
  Flex,
  Image,
} from "@chakra-ui/react";
import HomePageArt from "../assets/Home-Page-Art.svg";
import AppLink from "../components/AppLink";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box
        height="85vh"
        background="linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(54,14,88,1) 42%, rgba(72,6,129,1) 72%, rgba(44,5,59,1) 100%)"
        p="2rem"
        px="10rem"
      >
        <Flex justify="space-between" height="80%" align="center">
          <Box>
            <Heading mt={16} color="white" as="h1" fontSize="7xl">
              Control your <br /> Chaos
            </Heading>
            <Text my={2} color="gray.400">
              Start your journey of mindfullness today
            </Text>
            <AppLink href="/signup">
              <Button
                variant="outline"
                size="md"
                rightIcon={<ArrowForwardIcon />}
                color="white"
                fontWeight="normal"
                mt={6}
                textDecoration="none"
                _hover={{
                  bg: "white",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Get Started
              </Button>
            </AppLink>
          </Box>
          <Image width="40%" src={HomePageArt} alt="Home Page Art" ml={3} />
        </Flex>
      </Box>
      <Heading my={4} mt={8} w="100%" textAlign="center">
        Help Yourself. Help Others
      </Heading>
      <Flex p={6} justify="space-evenly" align="center">
        <Flex
          w="30%"
          justify="center"
          align="center"
          textAlign="center"
          direction="column"
          p={10}
          bg="purple.400"
        >
          <Heading fontSize="2xl">Help Yourself</Heading>
          <Text mt={2} fontSize="sm">
            Help yoursef by meditation daily and have a calm mind
          </Text>
        </Flex>
        <Flex
          w="30%"
          justify="center"
          align="center"
          textAlign="center"
          direction="column"
          p={10}
          bg="purple.400"
        >
          <Heading fontSize="2xl">Earn Coins</Heading>
          <Text mt={2} fontSize="sm">
            Earn Coins by meditating daily
          </Text>
        </Flex>
        <Flex
          w="30%"
          justify="center"
          align="center"
          textAlign="center"
          direction="column"
          p={10}
          bg="purple.400"
        >
          <Heading fontSize="2xl">Help Others</Heading>
          <Text mt={2} fontSize="sm">
            Help others by donating your hard earned coins to those in need
          </Text>
        </Flex>
      </Flex>
      <Flex py={4} bg="black" color="white" justify="center" align="center">
        <Text>Made with ❤️ by Sayan Das</Text>
      </Flex>
    </Box>
  );
};

export default Home;
