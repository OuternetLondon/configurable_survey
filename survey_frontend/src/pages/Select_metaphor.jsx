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

function Select_metaphor({
  questionOneStyle,
  question,
  selectButton,
  submitResponse,
}) {
  return (
    <>
      <Flex {...flexStyles}>
        <Text {...questionOneStyle}>
          {questionList[currentQuestion].question}
        </Text>
        <Stack
          display={currentQuestion === "FINAL" ? "none" : "flex"}
          {...buttonGroupStyle}
        >
          {questionList[currentQuestion].answers.map((answer) =>
            selectedValue !== answer ? (
              <Button
                key={answer}
                {...buttonStyle}
                onClick={() => selectButton(answer)}
              >
                <Text {...buttonTextStyle}>{answer}</Text>
              </Button>
            ) : (
              <Button
                key={answer}
                {...buttonClick}
                onClick={() => selectButton(answer)}
              >
                <Text {...buttonTextStyle}>{answer}</Text>
              </Button>
            )
          )}
        </Stack>

        {valueSelected ? (
          <Button
            {...confirmButtonStyle}
            onClick={() => submitResponse()}
            display={currentQuestion === "FINAL" && "none"}
          >
            <Text {...confirmText}>
              {currentQuestion === "questionOne" ? "Confirm" : "Reveal"}
            </Text>
          </Button>
        ) : (
          <Button
            {...confirmButtonStyle}
            visibility="hidden"
            display={currentQuestion === "FINAL" && "none"}
          >
            <Text {...confirmText}>Confirm</Text>
          </Button>
        )}
      </Flex>
    </>
  );
}

export default Select_metaphor;
