import {
  Box,
  Button,
  CircularProgress,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { formatTime } from "../utils";
import ReactConfetti from "react-confetti";
import AppLink from "../components/AppLink";
import { updateMeditationRecords } from "../api/user";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Meditate = () => {
  const initCountdownRef = useRef();
  const mediIntervalRef = useRef();
  const nav = useNavigate();

  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [showInitialDialog, setShowInitialDialog] = useState(true);
  const [initialTimeout, setInitialTimeout] = useState(5);
  const [startMeditation, setStartMeditation] = useState(false);
  const [meditationOver, setMeditationOver] = useState(false);
  const [updatingMediationData, setUpdatingMediationData] = useState(false);

  const { uid, addMeditationRecord } = useContext(UserContext);

  useEffect(() => {
    if (!initCountdownRef.current) {
      // console.log("Setting up 5 sec countdown interval");
      const interval = setInterval(function () {
        setInitialTimeout((sec) => sec - 1);
      }, 1000);
      initCountdownRef.current = interval;

      // console.log("Setting up 5 sec timeout");
      setTimeout(() => {
        // console.log("5 seconds up");
        clearInterval(initCountdownRef.current);
        setShowInitialDialog(false);
        setStartMeditation(true);
      }, 5000);
    }
  }, []);

  const meditationTick = useCallback(() => {
    // console.log("Minute", minutes, "Seconds", seconds);
    if (seconds == 0) {
      setSeconds((_) => 59);
      setMinutes((min) => min - 1);
    } else {
      setSeconds((sec) => sec - 1);
    }
  }, [seconds, minutes]);

  useEffect(() => {
    if (startMeditation) {
      if (!mediIntervalRef.current) {
        // console.log("Setting up 1 minute timer and 1 sec interval");
        // Set interval for time rendering
        mediIntervalRef.current = setInterval(
          meditationTick.bind({ seconds, minutes }),
          1000
        );

        // Set 1 min timeout
        setTimeout(() => {
          // console.log("Meditation Over");
          clearInterval(mediIntervalRef.current);
          setMeditationOver(true);
        }, 10000);
      }
    }
  }, [startMeditation, mediIntervalRef, seconds, minutes]);

  const onGoBackToProfileHandler = useCallback(() => {
    setUpdatingMediationData(true);
    updateMeditationRecords(uid)
      .then((data) => {
        addMeditationRecord(data);
        setUpdatingMediationData(false);
        nav("/profile");
      })
      .catch((err) => {
        setUpdatingMediationData(false);
        // console.log("Error updating meditation record", err);
      });
  }, [uid]);

  return (
    <Flex
      justify="center"
      align="center"
      column="column"
      position="relative"
      w="100vw"
      h="100vh"
      bg="#91b2c7"
    >
      {meditationOver && <ReactConfetti />}
      {/* Meditation Complete Modal */}
      <Modal
        isOpen={meditationOver}
        onClose={() => setMeditationOver(false)}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        isCentered
      >
        <ModalContent>
          {updatingMediationData ? (
            <Flex py={4} justify="center" align="center" direction="column">
              <CircularProgress isIndeterminate />
            </Flex>
          ) : (
            <Flex py={4} justify="center" align="center" direction="column">
              <Text fontSize="xl" fontWeight="bold">
                Congratulations !!
              </Text>
              <Text my={3} fontSize="md" color="gray.400">
                You have completed today's meditation
              </Text>
              <Box my={2}>
                <Button
                  onClick={onGoBackToProfileHandler}
                  variant="outline"
                  colorScheme="green"
                >
                  Go Back To Profile
                </Button>
              </Box>
            </Flex>
          )}
        </ModalContent>
      </Modal>
      {/* Initial Countdown Modal */}
      <Modal
        isOpen={showInitialDialog}
        onClose={() => setShowInitialDialog(false)}
        closeOnOverlayClick={false}
        closeOnEsc={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <Flex justify="center" align="center" direction="column" p={6}>
            <Text>Your Meditation Begins In</Text>
            <Text mt={4} fontSize="4xl">
              {initialTimeout}
            </Text>
          </Flex>
        </ModalContent>
      </Modal>
      <Box
        bg="white"
        rounded="lg"
        px={6}
        py={3}
        position="absolute"
        top="1rem"
        left="1rem"
      >
        <Text>Time Left</Text>
        <Flex justify="start" align="center">
          <Text fontSize="4xl">{formatTime(minutes)}</Text>
          <Text fontSize="4xl" ml={3}>
            :
          </Text>
          <Text fontSize="4xl" ml={3}>
            {formatTime(seconds)}
          </Text>
        </Flex>
      </Box>
      <Box
        position="absolute"
        bg="rgba(255,255, 255,0.5)"
        w="50vw"
        h="90vh"
        clipPath="circle()"
        className="meditation_breathe_bubbles"
      />
      <Box
        position="absolute"
        bg="rgba(255,255,255,0.3)"
        w="30vw"
        h="60vh"
        clipPath="circle()"
        className="meditation_breathe_bubbles"
      />
      <Box
        position="absolute"
        bg="rgba(255,255,255,0.3)"
        w="10vw"
        h="20vh"
        clipPath="circle()"
        className="meditation_breathe_bubbles"
      />
    </Flex>
  );
};

export default Meditate;
