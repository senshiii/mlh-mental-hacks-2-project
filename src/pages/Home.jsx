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
    </Box>
  );
};

export default Home;
