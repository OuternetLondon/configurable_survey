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
import Loop_JSON from "@/survey_components/loop_JSON";
import chroma from "chroma-js";
import useSetDefaultStyles from "../hooks/useSetDefaultStyles";
import { Children, use } from "react";
import "../index.css";
import { useState } from "react";
import Loop_components from "@/survey_components/loop_components";
//import bgImage from "../images/O_bty190_BG_REF_12x6_v3.1001.jpeg";

function Select_metaphor() {
  const [selectedValue, setSelectedValue] = useState("");
  const [valueSelected, setValueSelected] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState("questionOne");
  const [finalAnswer, setFinalAnswer] = useState(false);

  const JSON_data = {
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
    mainContainer: {
      type: "survey",
      format: "flex",
      name: "main_container",
      direction: "vertical",
      height: "100vh",
      width: "100vw",
      contentStructure: "space-evenly",
      itemsCentered: true,
      image: "/images/background_skoda.jpg",
    },
    questionList: {
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
        answers: [
          "Chipmunk answer 1",
          "Chipmunk answer 2",
          "Chipmunk answer 3",
        ],
      },
      RACOON: {
        question: "What is the link between a Racoon and a Skoda Elqoq",
        answers: ["Fur", "Storage", "Tail"],
      },
      CLOUDS: {
        question: "Clouds question",
        answers: ["Clouds answer 1", "Clouds answer 2", "Clouds answer 3"],
      },
      "SNOW DROP": {
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
      FINAL: {
        question: "Look up!",
        answers: [""],
      },
    },
  };
  useSetDefaultStyles(JSON_data);

  const sendData = async (selection) => {
    console.log("senddata", currentQuestion, selectedValue);
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/survey_data`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selection }),
      }
    );
    const result = await response.json();
    console.log("result", result);
  };

  function selectButton(button) {
    setSelectedValue(button);
    setValueSelected(true);
    console.log("selectedValue", selectedValue);
  }

  function submitResponse() {
    let follow_question = [
      "CHIPMUNK",
      "RACOON",
      "CLOUDS",
      "SNOW DROP",
      "HUMMINGBIRD",
    ];
    let answers = ["DRIVING FOOTAGE 1", "DRIVING FOOTAGE 2"];
    if (follow_question.includes(currentQuestion)) {
      sendData(currentQuestion);
      setCurrentQuestion("FINAL");
      setValueSelected(false);
      return;
    }
    if (answers.includes(selectedValue)) {
      sendData(selectedValue);
      setCurrentQuestion("FINAL");
      setValueSelected(false);
      return;
    }
    setCurrentQuestion(selectedValue);
    setValueSelected(false);
  }

  function restart() {
    setCurrentQuestion("questionOne");
    setSelectedValue("");
    setValueSelected("");
    setFinalAnswer(false);
  }

  const questionList = JSON_data.questionList;
  let flexStyles = Loop_JSON({ JSON: JSON_data.mainContainer });

  return (
    <>
      <Box
        position="absolute"
        top="0"
        left="0"
        s
        color="var(--skoda-light-400)"
        p={4}
      >
        SKODA LOGO
      </Box>
      <Box
        position="absolute"
        top="0"
        right="0"
        color="var(--skoda-light-400)"
        p={4}
        onClick={() => restart()}
      >
        Restart Symbol
      </Box>
      <Flex {...flexStyles}>
        <Text
          visibility={currentQuestion === "questionOne" && "hidden"}
          color="white"
          fontFamily="skoda_bold, sans-serif"
          textStyle={currentQuestion === "FINAL" ? "7xl" : "5xl"}
        >
          {questionList[currentQuestion].question}
        </Text>

        <Stack
          display={currentQuestion === "FINAL" ? "none" : "flex"}
          w={currentQuestion === "questionOne" ? "35%" : "25%"}
          gap="15px"
          h=""
        >
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
                onClick={() => selectButton(answer)}
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
                onClick={() => selectButton(answer)}
              >
                <Text fontFamily="skoda_bold, sans-serif" textStyle="3xl">
                  {answer}
                </Text>
              </Button>
            )
          )}
        </Stack>

        {valueSelected ? (
          <Button
            width="15%"
            py={30}
            borderRadius="full"
            //borderWidth="3px"
            bg="var(--skoda-light-500)"
            onClick={() => submitResponse()}
            display={currentQuestion === "FINAL" && "none"}
          >
            <Text
              //  fontWeight="bold"
              fontFamily="skoda_bold, sans-serif"
              textStyle="2xl"
              color="black"
            >
              {currentQuestion === "questionOne" ? "Confirm" : "Reveal"}
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
            display={currentQuestion === "FINAL" && "none"}
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
