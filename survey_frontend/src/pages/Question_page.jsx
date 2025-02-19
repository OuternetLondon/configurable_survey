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
import { FaFontAwesome } from "react-icons/fa";
import Logo from "../survey_components/logo_svg";
import Restart_symbol from "@/survey_components/restart_symbol";
//import bgImage from "../images/O_bty190_BG_REF_12x6_v3.1001.jpeg";

function Question_page({
  JSON_data,
  currentQuestion,
  selectedValue,
  setCurrentQuestion,
  submitResponse,
  clickedButton,
  setClickedButton,
}) {
  const questionList = JSON_data.questionList;
  let flexStyles = Loop_JSON({ JSON: JSON_data.mainContainer });
  let questionOneStyle = Loop_JSON({ JSON: JSON_data.questionOne });
  let questionTwoStyle = Loop_JSON({ JSON: JSON_data.questionTwo });
  let buttonGroupStyle = Loop_JSON({ JSON: JSON_data.q2_buttonGroup });
  let buttonStyle = Loop_JSON({ JSON: JSON_data.q2_button });
  let buttonClick = Loop_JSON({ JSON: JSON_data.q2_button.selectedStyle });
  let buttonTextStyle = Loop_JSON({ JSON: JSON_data.q2_button.text });
  let confirmButtonStyle = Loop_JSON({ JSON: JSON_data.confirmButton });
  let confirmText = Loop_JSON({ JSON: JSON_data.confirmButton.text });

  function clickButton(answer) {
    setClickedButton(answer);
  }
  return (
    <>
      <Flex {...flexStyles}>
        <Text {...questionTwoStyle}>
          {questionList[selectedValue].question}
        </Text>
        <Flex {...buttonGroupStyle}>
          {questionList[selectedValue].answers.map((answer) => (
            <Button
              key={answer}
              {...(clickedButton === answer ? buttonClick : buttonStyle)}
              onClick={() => clickButton(answer)}
            >
              <Text {...buttonTextStyle}>{answer}</Text>
            </Button>
          ))}
        </Flex>

        {clickedButton ? (
          <Button {...confirmButtonStyle} onClick={() => submitResponse()}>
            <Text {...confirmText}>Confirm</Text>
          </Button>
        ) : (
          <Button {...confirmButtonStyle} visibility="hidden">
            <Text {...confirmText}>Confirm</Text>
          </Button>
        )}
      </Flex>
    </>
  );
}

export default Question_page;
