import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useCallback, useContext, useEffect, useState } from "react";
import SignUpImage from "../assets/signup.jpg";
import AppLink from "../components/AppLink";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { signUpUser } from "../api/user";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const FormInput = ({ label, value, onChange, placeholder, type }) => {
  return (
    <FormControl>
      <FormLabel fontSize="sm">{label}</FormLabel>
      <Input
        size="sm"
        type={type ?? "text"}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </FormControl>
  );
};

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const nav = useNavigate();
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const { setUid } = useContext(UserContext);

  useEffect(() => {
    if (isAuth) nav("/profile");
  }, [isAuth]);

  const signUpHandler = useCallback(() => {
    setIsLoading(true);
    signUpUser(name, email, dob, password)
      .then((uid) => {
        setIsLoading(false);
        toggleAuth();
        setUid(uid);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("Error creating user", err);
      });
  }, [email, password, dob, name]);

  return (
    <Box>
      <Flex justify="start" align="start" height="100vh">
        <Flex
          w="40%"
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
          <Heading fontSize="3xl">Start your journey today !!</Heading>
          <Text my={5} color="gray.500">
            Sign Up and start your mindfullness journey
          </Text>
          <FormInput
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <Grid w="100%" my={3} templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem w="100%" flex={1}>
              <FormInput
                type="email"
                value={email}
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </GridItem>
            <GridItem w="100%" flex={1}>
              <FormInput
                type="date"
                value={dob}
                label="D.O.B"
                onChange={(e) => setDob(e.target.value)}
                placeholder="Select your D.O.B"
              />
            </GridItem>
          </Grid>
          <Grid w="100%" my={3} templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem w="100%" flex={1}>
              <FormInput
                type="password"
                value={password}
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </GridItem>
            <GridItem w="100%" flex={1}>
              <FormInput
                type="password"
                value={confirmPassword}
                label="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter your password again"
              />
            </GridItem>
          </Grid>
          <Button
            my={3}
            fontWeight="normal"
            rightIcon={<BsArrowRight />}
            colorScheme="green"
            isLoading={isLoading}
            onClick={signUpHandler}
          >
            Start Your Journey
          </Button>
        </Flex>
        <Image
          src={SignUpImage}
          alt="A Woman Meditating"
          w="60%"
          h="100%"
          objectPosition="center"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
};

export default SignUp;
