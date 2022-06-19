import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useCallback, useContext, useEffect, useState } from "react";
import SignUpImage from "../assets/signin.jpg";
import AppLink from "../components/AppLink";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { signInUser } from "../api/user";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const FormInput = ({ label, value, onChange, placeholder, type }) => {
  return (
    <FormControl w="100%">
      <FormLabel fontSize="sm">{label}</FormLabel>
      <Input
        w="100%"
        size="sm"
        type={type ?? "text"}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </FormControl>
  );
};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const nav = useNavigate();
  const { isAuth, setAuthState } = useContext(AuthContext);
  const { setUid } = useContext(UserContext);

  useEffect(() => {
    if (isAuth) nav("/profile");
  }, [isAuth]);

  const signInHandler = useCallback(() => {
    setIsLoading(true);
    signInUser(email, password)
      .then((uid) => {
        setIsLoading(false);
        setAuthState(true);
        setUid(uid);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("Error signing in user", err);
      });
  }, [email, password]);

  return (
    <Box>
      <Flex justify="start" align="start" height="100vh">
        <Flex
          w="45%"
          h="100%"
          justify="center"
          p={8}
          align="start"
          direction="column"
        >
          <AppLink
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            href="/"
            mb={5}
          >
            <BsArrowLeft />
            &nbsp;Go Back
          </AppLink>

          <Heading fontSize="3xl">Find the peace that you deserve !!</Heading>

          <Text my={5} color="gray.500">
            Sign In to continue your mindfullness journey
          </Text>

          <FormInput
            type="email"
            value={email}
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <Box mt={4} w="100%">
            <FormInput
              type="password"
              value={password}
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </Box>

          <Button
            my={5}
            fontWeight="normal"
            rightIcon={<BsArrowRight />}
            colorScheme="green"
            isLoading={isLoading}
            onClick={signInHandler}
          >
            Continue Your Journey
          </Button>
          <Text mt={3}>
            Don't have an account, Sign Up{" "}
            <AppLink color="blue" href="/signin">
              here
            </AppLink>
          </Text>
        </Flex>
        <Image
          src={SignUpImage}
          alt="A Woman Meditating"
          w="55%"
          h="100%"
          objectPosition="center"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
};

export default SignIn;
