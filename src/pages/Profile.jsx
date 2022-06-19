import { useContext, useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Avatar,
  Box,
  Icon,
  Text,
  Divider,
  IconButton,
  Button,
  Grid,
  GridItem,
  CircularProgress,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { FiSettings } from "react-icons/fi";
import { BiCoinStack, BiLogOut } from "react-icons/bi";
import {
  AiFillFire,
  AiFillClockCircle,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FaPen, FaCoins, FaHandsHelping } from "react-icons/fa";
import { isDateInArray } from "../utils";
import { UserContext } from "../context/UserContext";
import { fetchMyProfile } from "../api/user";
import ReactCalendar from "react-calendar";
import AppLink from "../components/AppLink";
import "react-calendar/dist/Calendar.css";
import { AuthContext } from "../context/AuthContext";

const MyProfileTab = ({
  today,
  onChangeDate,
  name,
  profilePhoto,
  meditationDates,
}) => {
  const streak = meditationDates?.reduce((streak, dateObj, index, array) => {
    let retVal;
    if (index == 0 || streak == 0) retVal = 1;
    else {
      let currentDate = +dateObj["date"],
        prevDate = +array[index - 1]["date"];
      if (currentDate == prevDate + 1) retVal = streak + 1;
      else retVal = 1;
    }
    return retVal;
  }, 0);

  const hasMeditatedToday = !!meditationDates?.find(
    (item) => +item?.date == new Date().getDate()
  );

  return (
    <>
      <Flex justify="start" align="center">
        <Avatar name={name} src={profilePhoto} w="64px" h="64px" />
        <Heading fontSize="2xl" ml={4}>
          {name}
        </Heading>
        <IconButton
          ml="auto"
          rounded="full"
          bg="gray.300"
          aria-label="Edit Details"
          icon={<FaPen />}
        />
      </Flex>
      <Divider my={4} />
      <Heading fontSize="xl" my={3}>
        Your Meditation Record
      </Heading>
      <Flex justify="start" align="start" my={2}>
        <Box w="50%">
          <ReactCalendar
            className="calendar"
            tileClassName={({ activeStartDate, date, view }) => {
              const today = new Date();
              const dates = meditationDates?.map(
                (item) => new Date(item?.year, item?.month, item?.date)
              );
              if (date < today) {
                if (isDateInArray(dates, date)) {
                  return "meditation_checked_tile";
                } else return "mditation_missed_tile";
              }
            }}
            value={today}
            onChange={onChangeDate}
          />
        </Box>
        <Box w="50%" px={6}>
          <Text fontSize="lg" fontWeight="bold">
            Your Insights
          </Text>
          <Flex
            justify="start"
            align="center"
            borderColor="gray.400"
            borderWidth="thin"
            px={2}
            py={3}
            bg="gray.200"
            rounded="lg"
            my={3}
          >
            <AiFillFire color="orange" fontSize="1.4rem" />
            <Text fontSize="md" ml={3}>
              You have a meditation streak of {streak} days
            </Text>
          </Flex>
          <Flex
            justify="start"
            align="center"
            borderColor="gray.400"
            borderWidth="thin"
            px={2}
            py={3}
            bg="gray.200"
            rounded="lg"
            my={3}
          >
            <AiFillClockCircle color="blue" fontSize="1.4rem" />
            <Text fontSize="md" ml={3}>
              You meditate for an avg of 10 mins
            </Text>
          </Flex>
          {hasMeditatedToday ? (
            <Flex
              justify="start"
              align="center"
              borderColor="gray.400"
              borderWidth="thin"
              px={2}
              py={3}
              bg="gray.200"
              rounded="lg"
              my={3}
            >
              <AiFillClockCircle color="blue" fontSize="1.4rem" />
              <Text fontSize="md" ml={3}>
                You have completed today's meditation session
              </Text>
            </Flex>
          ) : (
            <AppLink href="/meditate">
              <Button
                w="100%"
                rightIcon={<AiOutlineArrowRight />}
                variant="outline"
                colorScheme="teal"
              >
                Start Today's Meditation
              </Button>
            </AppLink>
          )}
        </Box>
      </Flex>
    </>
  );
};

const MyCoinsTab = ({ coins }) => {
  return (
    <Flex justify="center" align="center" direction="column">
      <Icon as={FaCoins} fontSize="9xl" color="yellow.300" />
      <Text my={4} fontWeight="bold" fontSize="2xl">
        You have {coins} Coins
      </Text>
      <Text my={4} alignSelf="start">
        What can you do with these coins ?
      </Text>
      <Grid w="100%" templateColumns="repeat(1, 1fr)" gap={4}>
        <GridItem w="100%">
          <AppLink href="/support">
            <Flex
              p={3}
              bg="black"
              rounded="lg"
              color="white"
              justify="start"
              align="center"
              cursor="pointer"
            >
              <Icon fontSize="xl" mr={3} as={FaHandsHelping} />
              <Text flex={1}>Support Charitable Instituions</Text>
              <Icon fontSize="xl" mr={3} as={AiOutlineArrowRight} />
            </Flex>
          </AppLink>
        </GridItem>
      </Grid>
    </Flex>
  );
};

const Profile = () => {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [currentTab, setCurrentTab] = useState("profile");
  const [isLoading, setIsLoading] = useState(false);

  const {
    uid,
    name,
    profilePhoto,
    meditationDates,
    coins,
    onProfileLoad,
  } = useContext(UserContext);
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    if (isAuth) {
      setIsLoading(true);
      fetchMyProfile(uid)
        .then(({ name, email, dob, profilePhoto, meditationDates, coins }) => {
          onProfileLoad(name, email, dob, profilePhoto, meditationDates, coins);
          setIsLoading(false);
        })
        .catch((err) => {
          // console.log("[Profile] profile load error", err);
          setIsLoading(false);
        });
    }
  }, []);

  let ProfileView = null;
  if (currentTab == "profile")
    ProfileView = (
      <MyProfileTab
        today={calendarDate}
        name={name}
        profilePhoto={profilePhoto}
        meditationDates={meditationDates}
        onChangeDate={setCalendarDate}
      />
    );
  else if (currentTab == "coin") ProfileView = <MyCoinsTab coins={coins} />;

  if (isLoading)
    ProfileView = (
      <Flex justify="center" align="center" direction="column">
        <CircularProgress isIndeterminate />
        <Text mt={4}>Fetching your profile info...</Text>
      </Flex>
    );

  return (
    <>
      <Navbar />
      <Flex
        justify="start"
        align="start"
        py={6}
        px="10rem"
        bg="linear-gradient(to right, #8e2de2, #4a00e0);"
        minH="90vh"
      >
        <Box
          bg="white"
          boxShadow="0 0 10px -4px black"
          rounded="lg"
          p={4}
          w="20%"
        >
          <Heading mb={6} fontSize="xl">
            My Profile
          </Heading>
          <Flex
            onClick={() => setCurrentTab("profile")}
            cursor="pointer"
            mb={3}
            justify="center"
            align="center"
          >
            <Icon mr={4} as={FiSettings} />
            <Text>Profile</Text>
          </Flex>
          <Divider mb={4} borderColor="gray.400" />
          <Flex
            onClick={() => setCurrentTab("coin")}
            cursor="pointer"
            mb={3}
            justify="center"
            align="center"
          >
            <Icon mr={4} as={BiCoinStack} />
            <Text>My Coins</Text>
          </Flex>
          <Divider mb={4} borderColor="gray.400" />
          <Button
            variant="outline"
            w="100%"
            colorScheme="red"
            leftIcon={<BiLogOut />}
          >
            Logout
          </Button>
        </Box>
        <Box
          bg="white"
          rounded="lg"
          boxShadow="0 0 10px -6px black"
          p={4}
          ml={3}
          w="80%"
        >
          {ProfileView}
        </Box>
      </Flex>
    </>
  );
};

export default Profile;
