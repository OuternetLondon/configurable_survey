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
import Loop_components from "@/survey_components/loop_components";
//import bgImage from "../images/O_bty190_BG_REF_12x6_v3.1001.jpeg";

function Select_metaphor() {
  const [selectedValue, setSelectedValue] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("CHIPMUNK");

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
  };
  useSetDefaultStyles(JSON);
  function testSubmit(button) {
    setSelectedValue(button);
    console.log("selectedValue", selectedValue);
  }

  const questionList = {
    questionOne: {
      question: "null",
      answers: [
        "DRIVING FOOTAGE 1",
        "DRIVING FOOTAGE 2",
        "CHIPMUNK",
        "RACOON",
        "CLOUDS",
        "SNOW DROP",
        "HUMMINGBIRD",
      ],
    },
    CHIPMUNK: {
      question: "Chipmunk question",
      answers: ["Chipmunk answer 1", "Chipmunk answer 2", "Chipmunk answer 3"],
    },
    RACOON: {
      question: "Racoon question",
      answers: ["Racoon answer 1", "Racoon answer 2", "Racoon answer 3"],
    },
    CLOUDS: {
      question: "Clouds question",
      answers: ["Clouds answer 1", "Clouds answer 2", "Clouds answer 3"],
    },
    SNOWDROP: {
      question: "Snow Drop question",
      answers: [
        "Snow Drop answer 1",
        "Snow Drop answer 2",
        "Snow Drop answer 3",
      ],
    },
    HUMMINGBIRD: {
      question: "Hummingbird question",
      answers: [
        "Hummingbird answer 1",
        "Hummingbird answer 2",
        "Hummingbird answer 3",
      ],
    },
  };

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
        <Text
          visibility={currentQuestion === "questionOne" && "hidden"}
          color="white"
          fontFamily="skoda_bold, sans-serif"
          textStyle="5xl"
        >
          {questionList[currentQuestion].question}
        </Text>
        <Stack w="35%" gap="10px" h="">
          {questionList[currentQuestion].answers.map((answer) =>
            selectedValue !== answer ? (
              <Button
                key={answer}
                borderColor="white"
                borderStyle="solid"
                width=""
                py={30}
                borderRadius="full"
                borderWidth="3px"
                bg="var(--skoda-dark-500)"
                onClick={() => testSubmit(answer)}
              >
                <Text fontFamily="skoda_bold, sans-serif" textStyle="3xl">
                  {answer}
                </Text>
              </Button>
            ) : (
              <Button
                key={answer}
                borderColor="var(--skoda-light-500)"
                borderStyle="solid"
                color="black"
                width=""
                py={30}
                borderRadius="full"
                borderWidth="3px"
                bg="var(--skoda-light-500)"
                onClick={() => testSubmit(answer)}
              >
                <Text fontFamily="skoda_bold, sans-serif" textStyle="3xl">
                  {answer}
                </Text>
              </Button>
            )
          )}
        </Stack>
        {selectedValue ? (
          <Button
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
            width="15%"
            py={30}
            borderRadius="full"
            //borderWidth="3px"
            bg="var(--skoda-light-500)"
            visibility="hidden"
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
        )}
      </Flex>
    </>
  );
}

export default Select_metaphor;
