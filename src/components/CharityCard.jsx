import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CharityCard = ({
  imageLink,
  title,
  summary,
  need,
  country,
  contactName,
  contactAddress,
  contactCity,
  contactState,
  contactPostal,
  contactCountry,
  donationOptions,
  longTermImpact,
  goal,
  funding,
  remaining,
}) => {
  const [sliderVal, setSliderVal] = useState(funding);
  return (
    <Flex
      bg="white"
      boxShadow="0 0 10px -6px"
      p={6}
      rounded="lg"
      justify="start"
      my={6}
      align="start"
    >
      <Box alignSelf="start" w="30%">
        <Image h="100%" w="100%" src={imageLink} alt="Charity Banner" />
        <Text my={2} fontSize="lg">
          Country: {country}
        </Text>
        <Text my={2} fontSize="xl" fontWeight="bold">
          Need
        </Text>
        <Text my={2} fontSize="sm">
          {need}
        </Text>
        <Text my={2} fontSize="xl" fontWeight="bold">
          Long Term Impact
        </Text>
        <Text my={2} fontSize="sm">
          {longTermImpact}
        </Text>
      </Box>
      <Flex w="60%" px={6} justify="start" align="start" direction="column">
        <Heading fontSize="2xl">{title}</Heading>
        <Text fontSize="sm" my={2}>
          {summary}
        </Text>
        <Text my={2}>
          <strong>Contact :</strong> {contactName}, {contactAddress},{" "}
          {contactCity}, {contactState}, {contactPostal}, {contactCountry}
        </Text>
        <Text my={2} fontSize="xl" fontWeight="bold">
          Donation Collected
        </Text>
        <Text fontSize="sm" my={2} >
          Funding Recieved : {funding}, Goal: {goal}, Remaining: {remaining}
        </Text>
        <Flex w="100%" justify="space-between" align="center">
          <Text>0</Text>
          <Text>{goal}</Text>
        </Flex>
        <Slider
          max={goal}
          step={0.01}
          aria-label="donation-slider"
          colorScheme="blue"
          defaultValue={funding}
          my={4}
          mb={8}
          isDisabled
          _disabled={{color: 'black'}}
          onChange={(val) => setSliderVal(val)}
        >
          <SliderMark mt={2} value={0.25 * goal}>
            25%
          </SliderMark>
          <SliderMark mt={2} value={0.5 * goal}>
            50%
          </SliderMark>
          <SliderMark mt={2} value={0.75 * goal}>
            75%
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Text mb={4} fontWeight="bold">
          Donation Options
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          {donationOptions?.map((donation, index) => {
            return (
              <GridItem w="100%" flex={1} key={index}>
                <Flex
                  rounded="xl"
                  bg="gray.100"
                  p={6}
                  justify="center"
                  align="center"
                  direction="column"
                >
                  <Text my={2} fontSize="xl" fontWeight="bold">
                    {donation.amount}
                  </Text>
                  <Text fontSize="sm" textAlign="center">
                    {donation.description}
                  </Text>
                  <Button
                    colorScheme="green"
                    fontWeight="normal"
                    mt={4}
                    w="100%"
                  >
                    Donate
                  </Button>
                </Flex>
              </GridItem>
            );
          })}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default CharityCard;
