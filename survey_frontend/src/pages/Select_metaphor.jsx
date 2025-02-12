import {
  Button,
  HStack,
  VStack,
  Stack,
  Input,
  ButtonGroup,
  Center,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import chroma from "chroma-js";
import useSetDefaultStyles from "../hooks/useSetDefaultStyles";
import { Children, use } from "react";
import { Radio, RadioGroup } from "@/components/ui/radio";
import "../index.css";
import { useState } from "react";
//import bgImage from "../images/O_bty190_BG_REF_12x6_v3.1001.jpeg";

function Select_metaphor() {
  const [selectedValue, setSelectedValue] = useState("");
  const JSON = {
    default_colors: [
      { color: "gray", hex: "#52525b" },
      { color: "red", hex: "#ef4444" },
      { color: "yellow", hex: "#eab308" },
      { color: "orange", hex: "#f97316" },
      { color: "green", hex: "#22c55e" },
      { color: "blue", hex: "#3b82f6" },
      { color: "teal", hex: "#14b8a6" },
      { color: "purple", hex: "#a855f7" },
      { color: "pink", hex: "#ec4899" },
      { color: "cyan", hex: "#06b6d4" },
      { color: "skoda-light", hex: "#98FB98" },
      { color: "skoda-dark", hex: "#0E3A2B" },
    ],
    components: [
      {
        name: "logo",
        innerContent: "SKODA LOGO",
        position: "absolute",
        top: "0",
        left: "0",
        color: "skoda-light-400",
        padding: "4",
      },
      {
        name: "flex_container",
        direction: "vertical",
        contentStructure: "space-evenly",
        itemsCentered: true,
        children: [],
      },
    ],
  };
  useSetDefaultStyles(JSON);

  function testSubmit(button) {
    setSelectedValue(button);
    console.log("selectedValue", selectedValue);
  }
  return (
    <>
      <Box
        position="absolute"
        top="0"
        left="0"
        w="full"
        color="var(--skoda-light-400)"
        p={4}
      >
        SKODA LOGO
      </Box>
      <Flex
        w="100vw"
        h="100vh"
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        //bg="var(--skoda_dark-500)"
        bgImage="url(/images/O_bty190_BG_REF_12x6_v3.1001.jpeg)"
        backgroundPosition="center"
        bgSize="cover"
      >
        <Text visibility="hidden" textStyle="5xl">
          Text
        </Text>
        <Stack w="35%" gap="10px" h="">
          <Button
            colorScheme="teal"
            borderColor="white"
            borderStyle="solid"
            width=""
            py={30}
            borderRadius="full"
            borderWidth="3px"
            bg="var(--skoda-dark-500)"
            onClick={() => testSubmit("driving_one")}
          >
            <Text
              //  fontWeight="bold"
              fontFamily="skoda_bold, sans-serif"
              textStyle="3xl"
            >
              DRIVING FOOTAGE 1
            </Text>
          </Button>
          <Button
            colorScheme="teal"
            borderColor="white"
            borderStyle="solid"
            width=""
            py={30}
            borderRadius="full"
            borderWidth="3px"
            bg="var(--skoda-dark-500)"
            onClick={() => testSubmit("driving_two")}
          >
            <Text
              //  fontWeight="bold"
              fontFamily="skoda_bold, sans-serif"
              textStyle="3xl"
            >
              DRIVING FOOTAGE 2
            </Text>
          </Button>
          <Button
            colorScheme="teal"
            borderColor="white"
            borderStyle="solid"
            width=""
            py={30}
            borderRadius="full"
            borderWidth="3px"
            bg="var(--skoda-dark-500)"
          >
            <Text
              //  fontWeight="bold"
              fontFamily="skoda_bold, sans-serif"
              textStyle="3xl"
            >
              CHIPMUNK
            </Text>
          </Button>
          <Button
            colorScheme="teal"
            borderColor="white"
            borderStyle="solid"
            width=""
            py={30}
            borderRadius="full"
            borderWidth="3px"
            bg="var(--skoda-dark-500)"
          >
            <Text
              //  fontWeight="bold"
              fontFamily="skoda_bold, sans-serif"
              textStyle="3xl"
            >
              RACOON
            </Text>
          </Button>
          <Button
            colorScheme="teal"
            borderColor="white"
            borderStyle="solid"
            width=""
            py={30}
            borderRadius="full"
            borderWidth="3px"
            bg="var(--skoda-dark-500)"
          >
            <Text
              //  fontWeight="bold"
              fontFamily="skoda_bold, sans-serif"
              textStyle="3xl"
            >
              CLOUDS
            </Text>
          </Button>
          <Button
            colorScheme="teal"
            borderColor="white"
            borderStyle="solid"
            width=""
            py={30}
            borderRadius="full"
            borderWidth="3px"
            bg="var(--skoda-dark-500)"
          >
            <Text
              //  fontWeight="bold"
              fontFamily="skoda_bold, sans-serif"
              textStyle="3xl"
            >
              SNOW DROP
            </Text>
          </Button>
          <Button
            colorScheme="teal"
            borderColor="white"
            borderStyle="solid"
            width=""
            py={30}
            borderRadius="full"
            borderWidth="3px"
            bg="var(--skoda-dark-500)"
          >
            <Text
              //  fontWeight="bold"
              fontFamily="skoda_bold, sans-serif"
              textStyle="3xl"
            >
              HUMMING BIRD
            </Text>
          </Button>
        </Stack>
        {selectedValue ? (
          <Button
            borderColor="white"
            borderStyle="solid"
            width="15%"
            py={30}
            borderRadius="full"
            //borderWidth="3px"
            bg="var(--skoda-light-500)"
          >
            <Text
              //  fontWeight="bold"
              fontFamily="skoda_bold, sans-serif"
              textStyle="2xl"
              color="black"
            >
              Confirm
            </Text>
          </Button>
        ) : (
          <Button
            colorScheme="teal"
            borderColor="white"
            borderStyle="solid"
            width=""
            py={30}
            borderRadius="full"
            borderWidth="3px"
            bg="var(--skoda-dark-500)"
            visibility="hidden"
          >
            <Text
              //  fontWeight="bold"
              fontFamily="skoda_regular, sans-serif"
              textStyle="3xl"
            >
              SNOW DROP
            </Text>
          </Button>
        )}
      </Flex>
    </>
  );
}

export default Select_metaphor;
