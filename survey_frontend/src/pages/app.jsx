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
  Select,
} from "@chakra-ui/react";
import Loop_JSON from "@/survey_components/loop_JSON";
import chroma from "chroma-js";
import useSetDefaultStyles from "../hooks/useSetDefaultStyles";
import useMobileFriendly from "@/hooks/useMobileFriendly";
import { Children, use } from "react";
import "../index.css";
import { useState } from "react";
import Loop_components from "@/survey_components/loop_components";
import Logo from "../survey_components/logo_svg";
import Restart_symbol from "@/survey_components/restart_symbol";
import Select_metaphor from "./Select_metaphor";
import Question_page from "./Question_page";
import Final from "./final_page";

function App() {
  const [selectedValue, setSelectedValue] = useState("");
  const [clickedButton, setClickedButton] = useState("");

  const [currentQuestion, setCurrentQuestion] = useState("questionOne");
  const [finalAnswer, setFinalAnswer] = useState(false);

  //useMobileFriendly();
  console.log("selectedValue", selectedValue);
  console.log("currentQuestion", currentQuestion);
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
      { color: "white", hex: "#ffffff" },
      { color: "skoda-light", hex: "#80fcac" },
      { color: "skoda-dark", hex: "#103c2c" },
      { color: "skoda-logo", hex: "#23fda6" },
    ],
    mainContainer: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      direction: "vertical",
      justifyContent: "center",
      alignItems: "center",
      image: "/images/skoda_background.png",
    },
    questionOne: {
      fontSize: "6xl",
      color: "white",
      fontStyle: "skoda_bold, sans-serif",
      textAlign: "center",
      width: "100%",
    },
    questionTwo: {
      fontSize: "40px",
      color: "white",
      fontStyle: "skoda_bold, sans-serif",
      textAlign: "center",
    },
    q1_buttonGroup: {
      padding_x_axis: "50px",
      contentStructure: "space-evenly",
      width: "100%",
      gap: "50px",
      direction: "horizontal",
      display: "flex",
    },
    q2_buttonGroup: {
      gap: "30px",
      direction: "vertical",
      display: "flex",
    },
    q1_button: {
      height: "200px",
      width: "200px",
      selectedStyle: {
        backgroundColor: "skoda-light-500",
        outlineColor: "blue-500",
        outlineStyle: "solid",
        outlineWidth: "7px",
        size: "xl",
        height: "200px",
        width: "200px",
        borderRadius: "30px",
      },
      text: {
        fontSize: "3xl",
        fontStyle: "skoda_bold, sans-serif",
      },
    },
    q2_button: {
      borderColor: "skoda-logo-500",
      borderStyle: "solid",
      padding_y_axis: "30px",
      padding_x_axis: "110px",
      borderRadius: "100px",
      borderWidth: "3px",
      //  backgroundColor: "skoda-dark-500",
      selectedStyle: {
        borderColor: "skoda-light-500",
        borderStyle: "solid",
        padding_y_axis: "30px",
        padding_x_axis: "110px",
        borderRadius: "100px",
        borderWidth: "3px",
        backgroundColor: "skoda-dark-500",
        fontSize: "40px",

        color: "black",
      },
      text: {
        fontSize: "40px",
        fontStyle: "skoda_bold, sans-serif",
      },
    },
    confirmButton: {
      borderColor: "white",
      width: "15%",
      padding_y_axis: 30,
      borderRadius: "100px",
      backgroundColor: "skoda-light-500",
      text: {
        fontStyle: "skoda_bold, sans-serif",
        fontSize: "2xl",
        color: "black",
      },
    },
    questionList: {
      questionOne: {
        question: "Select to play",
        answers: ["CHIPMUNK", "RACOON", "CLOUDS", "SNOW DROP", "HUMMINGBIRD"],
        values: ["Chipmunk", "Racoon", "Clouds", "SnowDrop", "Hummingbird"],
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
        question: "What is the link between a Racoon and a Skoda Elroq?",
        answers: ["Fur", "Storage", "Sight", "Tail"],
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

  const metaphorResponse = new Map();
  for (let i = 0; i < JSON_data.questionList.questionOne.answers.length; i++) {
    metaphorResponse.set(
      JSON_data.questionList.questionOne.answers[i],
      JSON_data.questionList.questionOne.values[i]
    );
  }

  function submitResponse() {
    if (metaphorResponse.has(selectedValue)) {
      sendData(metaphorResponse.get(selectedValue));
      setCurrentQuestion("FINAL");
      // setValueSelected(false);
      return;
    }
  }

  function restart() {
    setCurrentQuestion("questionOne");
    setSelectedValue("");
    setClickedButton("");
    // setValueSelected("");
    setFinalAnswer(false);
  }

  let mainContainer = Loop_JSON({ JSON: JSON_data.mainContainer });

  return (
    <>
      <div
        style={{
          backgroundImage: `url(/images/skoda_background.png)`,
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Flex
          position="absolute"
          bottom="8"
          justifyContent="center"
          color="var(--skoda-logo-500)"
          width={"100%"}
          // mt={4}
          // ml={4}
          //p={4}
        >
          <Logo></Logo>
        </Flex>
        <Box
          position="absolute"
          top="0"
          right="0"
          color="var(--skoda-logo-400)"
          //mt={4}
          // h="20px"

          onClick={() => restart()}
        >
          <Restart_symbol></Restart_symbol>
        </Box>
        {currentQuestion === "questionOne" && (
          <Select_metaphor
            JSON_data={JSON_data}
            currentQuestion={currentQuestion}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            setCurrentQuestion={setCurrentQuestion}
            submitResponse={submitResponse}
            clickedButton={clickedButton}
            setClickedButton={setClickedButton}
          ></Select_metaphor>
        )}
        {currentQuestion !== "questionOne" && currentQuestion !== "FINAL" && (
          <Question_page
            JSON_data={JSON_data}
            currentQuestion={currentQuestion}
            selectedValue={selectedValue}
            submitResponse={submitResponse}
            clickedButton={clickedButton}
            setClickedButton={setClickedButton}
          ></Question_page>
        )}
        {currentQuestion === "FINAL" && (
          <Final
            JSON_data={JSON_data}
            currentQuestion={currentQuestion}
            selectedValue={selectedValue}
            submitResponse={submitResponse}
          ></Final>
        )}
      </div>
    </>
  );
}

export default App;
